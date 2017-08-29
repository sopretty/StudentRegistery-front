import "materialize-css";
import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConnexionComponent,
    CreerCompteComponent
  ],
  imports: [
    MaterializeModule,
    ModalModule.forRoot(),
    ModalModule,
    BootstrapModalModule,
    APP_ROUTES,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
