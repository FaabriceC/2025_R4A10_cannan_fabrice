import { Component, OnInit } from '@angular/core';
import { Voyage } from '../../models/voyage.type';
import { VoyageService } from '../services/voyage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-voyage-detail',
  imports: [CurrencyPipe, ModalComponent],
  templateUrl: './voyage-detail.component.html',
  styleUrl: './voyage-detail.component.css',
})
export class VoyageDetailComponent implements OnInit {
  voyage!: Voyage;
  imageUrl: string =
    'https://www.transport-personnes.fr/wp-content/uploads/2017/01/voyage-avion.jpg';

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const voyage = this.voyageService.getVoyageById(id);
    if (voyage) {
      this.voyage = voyage;
    }
  }

  deleteVoyage(): void {
    this.voyageService.deleteVoyage(this.voyage.id);
    this.router.navigate(['/home']);
  }
}
