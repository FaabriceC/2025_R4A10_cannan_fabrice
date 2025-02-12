import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import { CardComponent } from '../card/card.component';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ButtonComponent, CardListComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {


}
