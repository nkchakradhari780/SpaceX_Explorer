import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RocketsServices, SpaceXRocket } from '../../services/rockets-services';
import { LaunchServices } from '../../services/launch-services';

@Component({
  selector: 'app-single-rocket',
  imports: [RouterLink, CommonModule],
  templateUrl: './single-rocket.html',
  styleUrl: './single-rocket.css'
})
export class SingleRocket implements OnInit {
  rocketData!: SpaceXRocket;

  constructor(
    private service: RocketsServices, 
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const param = params.get('id');
      console.log("Hii Rocket Data:", param)
      if(param) {
        const rocket_id = +param;
        this.fetchRocketData(rocket_id);
      }
    }) 
  }

  fetchRocketData(id: number): void {
    this.service.getRocketById(id).subscribe({
      next: (response) => {
        this.rocketData = response;
        console.log("Rocket Data: ", response);
      }, 
      error: (err) =>{
        console.log("Error Fetching Rocket Data: ", err);
      }
    })
  }
}
