import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LaunchServices, SpaceXLaunch } from '../../services/launch-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-launch',
  templateUrl: './single-launch.html',
  styleUrls: ['./single-launch.css'],
  imports: [RouterLink, CommonModule]
})
export class SingleLaunch implements OnInit {
  launchData!: SpaceXLaunch;

  constructor(
    private service: LaunchServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const param = params.get('flightNumber');
      if (param) {
        const flightNumber = +param;
        this.fetchLaunchData(flightNumber);
      }
    });
  }

  fetchLaunchData(flightNumber: number): void {
    this.service.getLaunchByFlightNumber(flightNumber).subscribe({
      next: (response) => {
        this.launchData = response;
        console.log("Launch Data: ", response);
      },
      error: (err) => {
        console.log("Error Fetching Launch Data: ", err);
      }
    });
  }
}
