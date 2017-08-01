import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Pokemon } from './pokemon';

@Injectable()
export class PokemonSearchService {
    constructor(private http: Http) { }
    search(term: string): Observable<Pokemon[]> {
        return this.http
            //.get(`http://localhost:8080/api/pokemon/namehas/${term}`)
            .get(`api/pokemons/?name=${term}`)
            //.map(response => response.json());
            .map(response => response.json().data as Pokemon[]);
    }
}