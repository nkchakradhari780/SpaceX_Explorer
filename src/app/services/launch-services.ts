import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchServices {

  private baseUrl = "https://api.spacexdata.com/v3/launches"
  constructor(private http: HttpClient) { }

  getLaunchByFlightNumber(flightNumber: number): Observable<SpaceXLaunch> {
    const url = `${this.baseUrl}/${flightNumber}`
    return this.http.get<SpaceXLaunch>(url)
  }

  getAllLaunches(): Observable<SpaceXLaunch[]> {
    return this.http.get<SpaceXLaunch[]>(this.baseUrl)
  }
}


export class RocketCore {
  core_serial!: string;
  flight!: number;
  block!: number | null;
  gridfins!: boolean;
  legs!: boolean;
  reused!: boolean;
  land_success!: boolean | null;
  landing_intent!: boolean;
  landing_type!: string | null;
  landing_vehicle!: string | null;
}


export class OrbitParams {
  reference_system!: string;
  regime!: string;
  longitude!: number | null;
  semi_major_axis_km!: number | null;
  eccentricity!: number | null;
  periapsis_km!: number;
  apoapsis_km!: number;
  inclination_deg!: number;
  period_min!: number | null;
  lifespan_years!: number | null;
  epoch!: string | null;
  mean_motion!: number | null;
  raan!: number | null;
  arg_of_pericenter!: number | null;
  mean_anomaly!: number | null;
}

export class Payload {
  payload_id!: string;
  norad_id!: number[];
  reused!: boolean;
  customers!: string[];
  nationality!: string;
  manufacturer!: string;
  payload_type!: string;
  payload_mass_kg!: number;
  payload_mass_lbs!: number;
  orbit!: string;
  orbit_params!: OrbitParams;
}

export class Rocket {
  rocket_id!: string;
  rocket_name!: string;
  rocket_type!: string;
  first_stage!: {
    cores: RocketCore[];
  };
  second_stage!: {
    block: number;
    payloads: Payload[];
  };
  fairings!: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ship: string | null;
  };
}

export class LaunchSite {
  site_id!: string;
  site_name!: string;
  site_name_long!: string;
}

export class Links {
  mission_patch!: string;
  mission_patch_small!: string;
  reddit_campaign!: string | null;
  reddit_launch!: string | null;
  reddit_recovery!: string | null;
  reddit_media!: string | null;
  presskit!: string | null;
  article_link!: string;
  wikipedia!: string;
  video_link!: string;
  youtube_id!: string;
  flickr_images!: string[];
}


export class SpaceXLaunch {
  flight_number!: number;
  mission_name!: string;
  mission_id!: string[];
  upcoming!: boolean;
  launch_year!: string;
  launch_date_unix!: number;
  launch_date_utc!: string;
  launch_date_local!: string;
  is_tentative!: boolean;
  tentative_max_precision!: string;
  tbd!: boolean;
  launch_window!: number;
  rocket!: Rocket;
  ships!: string[];
  telemetry!: { flight_club: string | null };
  launch_site!: LaunchSite;
  launch_success!: boolean;
  launch_failure_details!: {
    time: number;
    altitude: number | null;
    reason: string;
  };
  links!: Links;
  details!: string;
  static_fire_date_utc!: string;
  static_fire_date_unix!: number;
  timeline!: { webcast_liftoff: number };
  crew!: any;
}
