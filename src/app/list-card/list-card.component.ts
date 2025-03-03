import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../services/voyage.service';
import { Voyage } from '../../models/voyage.type';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-card',
  imports: [CardComponent],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'], // Attention à la bonne syntaxe pour styleUrls
})
export class ListCardComponent implements OnInit {
  voyages: Voyage[] = [];
  currentPage = 1; // Page actuelle
  pageSize = 20; // Nombre de voyages à afficher par page
  totalPages: number = 1; // Nombre total de pages

  constructor(private voyageService: VoyageService) {}

  ngOnInit(): void {
    this.voyages = this.voyageService.getVoyages(); // Supposons que getVoyages renvoie tous les voyages
    this.totalPages = Math.ceil(this.voyages.length / this.pageSize); // Calcul du nombre de pages
  }

  // Retourne les voyages à afficher sur la page courante
  get paginatedVoyages(): Voyage[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.voyages.slice(startIndex, startIndex + this.pageSize);
  }

  // Changer la page de pagination
  onPageChange(page: number): void {
    this.currentPage = page;
  }

  // Gérer la suppression d'un voyage
  onVoyageDeleted(id: string): void {
    this.voyages = this.voyages.filter((voyage) => voyage.id !== id);
    this.totalPages = Math.ceil(this.voyages.length / this.pageSize); // Recalculer le nombre de pages après suppression
  }
}
