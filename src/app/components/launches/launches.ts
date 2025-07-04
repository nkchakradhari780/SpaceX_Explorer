import { Component, OnInit } from '@angular/core';
import { LaunchServices, SpaceXLaunch } from '../../services/launch-services';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-launches',
  imports: [CommonModule, RouterLink],
  templateUrl: './launches.html',
  styleUrl: './launches.css'
})
export class Launches implements OnInit {

  launches: SpaceXLaunch[] = [];
window: any;

  constructor (private service: LaunchServices) {}

  ngOnInit(): void {
    this.fetchAllLaunches();
  }

  fetchAllLaunches(): void {
    this.service.getAllLaunches().subscribe({
      next: (response) => {
        this.launches = response;
        console.log("All Launches: ", response);
      },
      error: (err) => {
        console.log("Error Fetching Launches: ", err);
      }
    });
  }
}
