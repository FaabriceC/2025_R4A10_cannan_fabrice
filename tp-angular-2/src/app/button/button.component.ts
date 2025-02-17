import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input({required: true}) button_text!: string;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    console.log("APPEL A L'ENFANT");
    this.clicked.emit();
  }

}
