import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapsuleServices {
 private baseUrl = 'https://api.spacexdata.com/v3/capsules';

  constructor(private http: HttpClient) {}

  getAllCapsules(): Observable<SpaceXCapsule[]> {
    const res =  this.http.get<SpaceXCapsule[]>(this.baseUrl);
    console.log("Response: ", res);
    return res;
  }

  getCapsuleBySerial(serial: string): Observable<SpaceXCapsule> {
    return this.http.get<SpaceXCapsule>(`${this.baseUrl}/${serial}`);
  }
}

export interface CapsuleMission {
  name: string;
  flight: number;
}

export interface SpaceXCapsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: CapsuleMission[];
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}
