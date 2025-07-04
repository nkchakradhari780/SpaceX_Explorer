import { Component } from '@angular/core';
import { RocketsServices, SpaceXRocket } from '../../services/rockets-services';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rockets',
  imports: [CommonModule, RouterLink],
  templateUrl: './rockets.html',
  styleUrl: './rockets.css'
})
export class Rockets {

  rocketList: SpaceXRocket[] = []
  window: any;

  constructor(private service: RocketsServices) {
  }

  ngOnInit(): void {
    this.service.getAllRockets().subscribe({
      next: (response: SpaceXRocket[]) => {
        this.rocketList = response;
        console.log("All Rockets: ", response);
      },
      error: (err: any) => {
        console.log("Error Fetching Rockets: ", err);
      }
    });
  }

}
