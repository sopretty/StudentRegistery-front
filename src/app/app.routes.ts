import {RouterModule, Routes} from '@angular/router';

// APP COMPONENTS
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {CreerCompteComponent} from './creer-compte/creer-compte.component';


const ROUTES: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: DashboardComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'creationCompte', component: CreerCompteComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
