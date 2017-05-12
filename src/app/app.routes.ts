import {RouterModule, Routes} from '@angular/router';

// APP COMPONENTS

import {PokemonsComponent} from './pokemons/pokemons.component';


const ROUTES: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: PokemonsComponent},
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
