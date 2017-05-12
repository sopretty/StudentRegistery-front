import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';
import {Pokemon} from '../interfaces/pokemon';

@Injectable()
export class PokemonService {


  private headers = new Headers({ 'Accept': 'application/json',
    'Content-Type': 'application/json' });

  // private property to store all backend URLs
  private _backendURL: any;

  constructor(private http: Http) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  deletePokemon(id: any): Observable<any> {
    return this.http.delete(this._backendURL.deletePokemon.replace(':id', id))
      .map(response => response.json())
      .catch(this.handleError);
  }

  getPokemons(): Observable<any> {
    return this.http.get(this._backendURL.allPokemon)
      .map(response => response.json())
      .catch(this.handleError);
  }

  findByDef(def: number) {
    return this.http.get(this._backendURL.findByDef.replace(':def', def))
      .map(response => response.json())
      .catch(this.handleError);
  }

  addPokemon(p: Pokemon): Observable<any> {
    const body = JSON.stringify({ 'foo': 'bar' });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._backendURL.allPokemon, JSON.stringify(p), options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private _options(headerList: Object = {}): RequestOptions {
    const headers = new Headers(Object.assign({'Content-Type': 'application/json'}, headerList));
    return new RequestOptions({headers: headers});
  }
}
