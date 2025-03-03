import { Component } from '@angular/core';
import { ListCardComponent } from '../list-card/list-card.component';

@Component({
  selector: 'app-home',
  imports: [ListCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
