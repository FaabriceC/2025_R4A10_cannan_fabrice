import { Injectable } from '@angular/core';
import { Voyage } from '../../models/voyage.type';
import { VOYAGES } from '../../models/voyage.data';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  private voyages: Voyage[] = [];

  constructor() {
    this.loadVoyages();
  }

  private saveVoyages(): void {
    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }

  private loadVoyages(): void {
    const storedVoyages = localStorage.getItem('voyages');
    this.voyages = storedVoyages ? JSON.parse(storedVoyages) : VOYAGES;
  }

  getVoyages(): Voyage[] {
    return this.voyages;
  }

  getVoyageById(id: string): Voyage | undefined {
    return this.voyages.find((voyage) => voyage.id === id);
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter((voyage) => voyage.id !== id);
    this.saveVoyages();
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
    this.saveVoyages();
  }
}
