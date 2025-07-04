// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Launches } from './components/launches/launches';
import { Rockets } from './components/rockets/rockets';
import { Capsules } from './components/capsules/capsules';
import { Cores } from './components/cores/cores';
import { SingleLaunch } from './components/single-launch/single-launch';
import { SingleRocket } from './components/single-rocket/single-rocket';
import { SingleCapsule } from './components/single-capsule/single-capsule';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'launches', children: [
    { path: '', component: Launches },
    { path: ':flightNumber', component: SingleLaunch }
  ]},
  { path: 'rockets', children: [  
    {path: '', component: Rockets},
    // {path: ':id', component: SingleRocket}
  ]},
  { path: 'capsules', children:[
    {path: '', component: Capsules}, 
    {path: ':capsule_serial', component: SingleCapsule}
  ]},
  { path: 'cores', component: Cores },
];
