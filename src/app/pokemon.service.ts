import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PokemonService {
    //private pokemonsUrl = 'http://localhost:8080/api/pokemon';
    private pokemonsUrl = 'api/pokemons';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getPokemons(): Observable<Pokemon[]> {
        return this.http
                    //.get(`${this.pokemonsUrl}/list`)
                    .get(this.pokemonsUrl)
                    //.map(res => res.json())
                    .map(res => res.json().data as Pokemon[])
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getPokemon(id: number): Observable<Pokemon> {
        return this.http
                    //.get(`${this.pokemonsUrl}/idis/${id}`)
                    .get(`${this.pokemonsUrl}/${id}`)
                    //.map(res => res.json())
                    .map(res => res.json().data as Pokemon)
    }

    update(pokemon: Pokemon): Observable<Pokemon> {
        return this.http
                    .put(this.pokemonsUrl, JSON.stringify(pokemon), { headers: this.headers })
                    .map(res => res.json());
    }

    add(pokemon: Pokemon): Observable<Pokemon> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
                    .post(this.pokemonsUrl, JSON.stringify(pokemon), options)
                    //.map(res => res.json())
                    .map(res => res.json().data as Pokemon);
    }

    delete(id: number): Observable<void> {
        const url = `${this.pokemonsUrl}/${id}`;
        return this.http
                    .delete(url, { headers: this.headers })
                    .map(res => res.json());
    }
}