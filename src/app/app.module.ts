import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_ROUTES} from './app.routes';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    AddPokemonComponent,
    PokemonsComponent
  ],
  imports: [
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
