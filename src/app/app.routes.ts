import {RouterModule, Routes} from '@angular/router';

// APP COMPONENTS
import {DashboardComponent} from "./dashboard/dashboard.component";

const ROUTES: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: DashboardComponent},
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
