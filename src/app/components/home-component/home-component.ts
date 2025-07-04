import { Component } from '@angular/core';
import { ExploreCard } from '../explore-card/explore-card';
import { FeatureCard } from '../feature-card/feature-card';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home-component',
  imports: [ExploreCard, FeatureCard,Hero],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
