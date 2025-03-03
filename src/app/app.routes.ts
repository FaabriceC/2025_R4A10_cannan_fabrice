import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoyageDetailComponent } from './voyage-detail/voyage-detail.component';
import { GenerateVoyageComponent } from './generate-voyage/generate-voyage.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'voyage/:id', component: VoyageDetailComponent },
  { path: 'generate', component: GenerateVoyageComponent },
  { path: '**', component: NotFoundComponent },
];
