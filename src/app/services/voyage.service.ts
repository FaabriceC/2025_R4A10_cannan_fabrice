import { Injectable } from '@angular/core';
import { Voyage } from '../../models/voyage.type';
import { VOYAGES } from '../../models/voyage.data';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  private voyages: Voyage[] = VOYAGES;

  constructor() {}

  getVoyages(): Voyage[] {
    return this.voyages;
  }

  getVoyageById(id: string): Voyage | undefined {
    return this.voyages.find((voyage) => voyage.id === id);
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter((voyage) => voyage.id !== id);
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
  }
}
