// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Launches } from './components/launches/launches';
import { Rockets } from './components/rockets/rockets';
import { Capsules } from './components/capsules/capsules';
import { Cores } from './components/cores/cores';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'launches', component: Launches },
  { path: 'rockets', component: Rockets },
  { path: 'capsules', component: Capsules },
  { path: 'cores', component: Cores },
];
