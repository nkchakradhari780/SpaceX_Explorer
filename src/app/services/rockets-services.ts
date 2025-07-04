import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocketsServices {
  private baseUrl = "https://api.spacexdata.com/v3/rockets";
  constructor(private http: HttpClient) { }

  getAllRockets(): Observable<SpaceXRocket[]> {
    return this.http.get<SpaceXRocket[]>(this.baseUrl);
  }

  getRocketById(rocketId: string): Observable<SpaceXRocket> {
    const url = `${this.baseUrl}/${rocketId}`;
    return this.http.get<SpaceXRocket>(url);
  }
}

// src/app/models/space-x-rocket.model.ts

export interface Dimensions {
  meters: number | null;
  feet: number | null;
}

export interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface FirstStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
}

export interface CompositeFairing {
  height: Dimensions;
  diameter: Dimensions;
}

export interface SecondStagePayloads {
  option_1: string;
  composite_fairing: CompositeFairing;
}

export interface SecondStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: Thrust;
  payloads: SecondStagePayloads;
}

export interface ISP {
  sea_level: number;
  vacuum: number;
}

export interface Engines {
  number: number;
  type: string;
  version: string;
  layout: string;
  isp: ISP;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
  thrust_to_weight: number;
}

export interface LandingLegs {
  number: number;
  material: string | null;
}

export interface SpaceXRocket {
  id: number;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: Dimensions;
  diameter: Dimensions;
  mass: {
    kg: number;
    lb: number;
  };
  payload_weights: PayloadWeight[];
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  flickr_images: string[];
  wikipedia: string;
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}
