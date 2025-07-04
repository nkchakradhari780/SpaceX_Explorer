import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoresServices, SpaceXCore } from '../../services/cores-services';

@Component({
  selector: 'app-single-cores',
  imports: [RouterLink, CommonModule],
  templateUrl: './single-cores.html',
  styleUrl: './single-cores.css'
})
export class SingleCores {
  coreData!: SpaceXCore;
Math: any;

  constructor(private service: CoresServices, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      const param = params.get('core_serial');
      console.log("Hii Core Data:", param)
      if(param) {
        const core_serial = param;
        this.fetchCoreData(core_serial);
      }
    })
  }

  fetchCoreData(core_serial: string): void {
    this.service.getCoreBySerial(core_serial).subscribe({
      next: (response) => {
        this.coreData = response;
        console.log("Core Data: ", response);
      },
      error: (err) =>{
        console.log("Error Fetching Core Data: ", err);
      }
    })
  }
}
