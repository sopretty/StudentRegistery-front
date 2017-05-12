import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonService} from '../assets/services/pokemon.service';
import {Pokemon} from '../assets/interfaces/pokemon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  private _pokemon: Pokemon;
  private _menu$: EventEmitter<any>;

  constructor(private _servicePokemon: PokemonService, private _router: Router) {
    this._menu$ = new EventEmitter();
    this.pokemon = {id: 0, name: '', attack: 0, defense: 0, stamina: 0, spawns: []};
  }

  ajouterPokemon() {
    this._servicePokemon.addPokemon(this.pokemon)
      .subscribe((res: any) => {
        this._menu$.emit();
      });
  }

  ngOnInit() {
  }

  get pokemon(): Pokemon {
    return this._pokemon;
  }

  set pokemon(value: Pokemon) {
    this._pokemon = value;
  }

  @Output('changeMenu') get menu$(): EventEmitter<any> {
    return this._menu$;
  }

  set menu$(value: EventEmitter<any>) {
    this._menu$ = value;
  }

  get servicePokemon(): PokemonService {
    return this._servicePokemon;
  }

  set servicePokemon(value: PokemonService) {
    this._servicePokemon = value;
  }

}
