import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class ProductService {

  readonly API = 'https://rickandmortyapi.com/';

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    return this.httpClient.get(`${this.API}api/character`).pipe(map((response: any) => response ? response.results : []))
  }

  save() {
    return this.httpClient.post('url', {usuario: ''})
  }

}