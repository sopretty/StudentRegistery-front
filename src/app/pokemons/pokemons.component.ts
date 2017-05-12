import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {PokemonService} from '../assets/services/pokemon.service';
import {Pokemon} from '../assets/interfaces/pokemon';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {Overlay} from 'angular2-modal';

@Component({
  selector: 'app-root',
  templateUrl: './pokemons.component.html',
  providers: [PokemonService],
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  private _pokemons: Pokemon[];
  private _filtered: boolean;
  private _menu: boolean;

  constructor(private _servicePokemon: PokemonService
    , private _overlay: Overlay
    , private _vcRef: ViewContainerRef

    , private _modal: Modal) {
    this._menu = true;
    _overlay.defaultViewContainer = _vcRef;
  }

  AllPokemon() {
    this._menu = true;
    this._servicePokemon.getPokemons()
      .subscribe((res: any) => {
        this._pokemons = res;
      });
  }

  AddOne() {
    this._menu = false;
  }

  get filtered(): boolean {
    return this._filtered;
  }

  set filtered(value: boolean) {
    this._filtered = value;
  }

  get overlay(): Overlay {
    return this._overlay;
  }

  set overlay(value: Overlay) {
    this._overlay = value;
  }

  get vcRef(): ViewContainerRef {
    return this._vcRef;
  }

  set vcRef(value: ViewContainerRef) {
    this._vcRef = value;
  }

  public get modal(): Modal {
    return this._modal;
  }

  public set modal(value: Modal) {
    this._modal = value;
  }

  filtre() {
    this._filtered = true;
  }

  filtrer(def: number) {
    this._filtered = false;
    this.servicePokemon.findByDef(def)
      .subscribe((res: any) => {
        this._pokemons = res;
      });
  }

  deletePokemon(id: any) {
    this.servicePokemon.deletePokemon(id)
      .subscribe((res: any) => {
        this._pokemons = res;
      });
  }

  ngOnInit() {
    this._servicePokemon.getPokemons()
      .subscribe((res: any) => {
        this._pokemons = res;
      });
  }

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  set pokemons(value: Pokemon[]) {
    this._pokemons = value;
  }

  get servicePokemon(): PokemonService {
    return this._servicePokemon;
  }

  set servicePokemon(value: PokemonService) {
    this._servicePokemon = value;
  }

  get menu(): boolean {
    return this._menu;
  }

  set menu(value: boolean) {
    this._menu = value;
  }
}
