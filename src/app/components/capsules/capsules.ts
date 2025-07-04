import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CapsuleServices, SpaceXCapsule } from '../../services/capsule-services';

@Component({
  selector: 'app-capsules',
  imports: [CommonModule, RouterLink],
  templateUrl: './capsules.html',
  styleUrl: './capsules.css'
})
export class Capsules {
  capsuleList: SpaceXCapsule[] = []
  window: any;

  constructor( private service: CapsuleServices) {}

  ngOnInit(): void{
    this.service.getAllCapsules().subscribe({
      next: (response: SpaceXCapsule[]) =>{
        console.log("hi")
        this.capsuleList = response;
        console.log("All Capsules: ", response);
      }, 
      error: (err: any) => {
        console.log("Error Fetchig Capsules: ", err);
      }
    })
  }
}
