import { Component, OnInit } from '@angular/core';
import { CapsuleServices, SpaceXCapsule } from '../../services/capsule-services';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-capsule',
  imports: [CommonModule, RouterLink],
  templateUrl: './single-capsule.html',
  styleUrl: './single-capsule.css'
})
export class SingleCapsule implements OnInit{

  capsuleData!: SpaceXCapsule;

  constructor(private service: CapsuleServices, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const param = params.get('capsule_serial');
      if(param) {
        const capsule_serial = param;
        this.fetchCapsuleData(capsule_serial);
      }
    })
  }

  fetchCapsuleData(capsule_serial: string) : void {
    this.service.getCapsuleBySerial(capsule_serial).subscribe({
      next: (response) => {
        this.capsuleData = response; 
        console.log("Capsule Data: ", response);
      }, 
      error: (err) => {
        console.log("Error Fetching Capsule Data", err);
      }
    })
  }
}
