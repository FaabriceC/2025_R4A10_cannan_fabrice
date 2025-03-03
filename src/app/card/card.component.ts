import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voyage } from '../../models/voyage.type';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VoyageService } from '../services/voyage.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, RouterLink, SlicePipe, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() voyage!: Voyage;
  @Output() voyageDeleted = new EventEmitter<string>();

  constructor(private voyageService: VoyageService) {}

  deleteVoyage(): void {
    this.voyageService.deleteVoyage(this.voyage.id);
    this.voyageDeleted.emit(this.voyage.id);
  }
}
