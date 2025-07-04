import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoresServices {
 private baseUrl = 'https://api.spacexdata.com/v3/cores';

  constructor(private http: HttpClient) {}

  getAllCores(): Observable<SpaceXCore[]> {
    return this.http.get<SpaceXCore[]>(this.baseUrl);
  }

  getCoreBySerial(serial: string): Observable<SpaceXCore> {
    return this.http.get<SpaceXCore>(`${this.baseUrl}/${serial}`);
  }
}


export interface CoreMission {
  name: string;
  flight: number;
}

export interface SpaceXCore {
  core_serial: string;
  block: number | null;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: CoreMission[];
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  asds_attempts: number;
  asds_landings: number;
  water_landing: boolean;
  details: string;
}
