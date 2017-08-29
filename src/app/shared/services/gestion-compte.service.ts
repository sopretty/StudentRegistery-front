import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';

@Injectable()
export class GestionCompteService {

  private headers = new Headers({'Content-Type': 'application/json'});

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

  checkConnexion(email: string, password: string): Observable<boolean> {
    return this.http
      .put(this._backendURL.checkConnexion, JSON.stringify({em: email, pw: password}), this._options())
      .map((res: Response) => res.json())
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
