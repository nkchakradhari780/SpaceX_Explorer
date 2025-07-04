import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-card',
  imports: [CommonModule],
  templateUrl: './explore-card.html',
  styleUrl: './explore-card.css'
})
export class ExploreCard {
  @Input() Name!: string;
  @Input() icon!: string;
}
