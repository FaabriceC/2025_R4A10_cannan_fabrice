import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../services/voyage.service';
import { Voyage } from '../../models/voyage.type';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-card',
  imports: [CardComponent],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent implements OnInit {
  voyages: Voyage[] = [];
  currentPage = 1;
  pageSize = 20;
  totalPages: number = 1;

  constructor(private voyageService: VoyageService) {}

  ngOnInit(): void {
    this.voyages = this.voyageService.getVoyages();
    this.totalPages = Math.ceil(this.voyages.length / this.pageSize);
  }

  get paginatedVoyages(): Voyage[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.voyages.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onVoyageDeleted(id: string): void {
    this.voyages = this.voyages.filter((voyage) => voyage.id !== id);
    this.totalPages = Math.ceil(this.voyages.length / this.pageSize);
  }
}
