import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input({required: true}) icon!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;

}
