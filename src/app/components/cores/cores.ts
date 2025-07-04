import { Component } from '@angular/core';
import { CoresServices, SpaceXCore } from '../../services/cores-services';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cores',
  imports: [CommonModule, RouterLink],
  templateUrl: './cores.html',
  styleUrl: './cores.css'
})
export class Cores {
  coresList: SpaceXCore[] = [];
  window: any;

  constructor( private service: CoresServices) {}

  ngOnInit() : void{
    this.service.getAllCores().subscribe({
      next: (response: SpaceXCore[]) => {
        this.coresList = response;
        console.log("All Cores: ", response);
      }, 
      error: (err) => {
        console.log("Error Fetching Errors : ", err);
      }
    })
  }
}
