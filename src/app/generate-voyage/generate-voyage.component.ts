import { Component } from '@angular/core';
import { VoyageService } from '../services/voyage.service';
import { generateID, Voyage } from '../../models/voyage.type';
import { Router } from '@angular/router';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../../models/data';
import { CurrencyPipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-generate-voyage',
  templateUrl: './generate-voyage.component.html',
  styleUrls: ['./generate-voyage.component.css'],
  imports: [CurrencyPipe, ModalComponent],
})
export class GenerateVoyageComponent {
  generatedVoyage: Voyage = {
    id: '',
    destination: 'TROP RICHE ?',
    description: 'Appuie sur générer pour générer un voyage !',
    prix: 1000000,
  };

  constructor(private voyageService: VoyageService, private router: Router) {}

  generateVoyage(): void {
    const randomDestination =
      DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    const randomDescription =
      DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    const randomPrix = PRIX[Math.floor(Math.random() * PRIX.length)];

    this.generatedVoyage = {
      id: generateID(),
      destination: randomDestination,
      description: randomDescription,
      prix: randomPrix,
    };
  }

  confirmVoyage(): void {
    if (this.generatedVoyage) {
      this.voyageService.addVoyage(this.generatedVoyage);
      this.router.navigate(['/voyage', this.generatedVoyage.id]);
    }
  }
}
