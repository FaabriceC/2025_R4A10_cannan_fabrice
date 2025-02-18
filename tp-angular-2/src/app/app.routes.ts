import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListVoyagesComponent} from "./list-voyages/list-voyages.component";
import {VoyageComponent} from "./voyage/voyage.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'voyages',
    component: ListVoyagesComponent
  },
  {
    path: 'voyage/:id',
    component: VoyageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];
