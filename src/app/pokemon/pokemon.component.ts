import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../assets/interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  private _pokemon: Pokemon;

  private _delete$: EventEmitter<any>;


  constructor() {
    this._delete$ = new EventEmitter();
  }

  delete() {
    this.delete$.emit(this.pokemon.id);
  }

  get pokemon(): Pokemon {
    return this._pokemon;
  }

  @Input() set pokemon(value: Pokemon) {
    this._pokemon = value;
  }

  @Output('delete') get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  set delete$(value: EventEmitter<any>) {
    this._delete$ = value;
  }

  ngOnInit() {
  }
}
