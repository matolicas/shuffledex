import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PokemonService {
    private pokemonsUrl = 'http://localhost:8080/api/pokemon';
    //private pokemonsUrl = 'api/pokemons';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getPokemons(): Observable<Pokemon[]> {
        return this.http
                    .get(`${this.pokemonsUrl}/list`)
                    //.get(this.pokemonsUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    getPokemonsOfType(type: string): Observable<Pokemon[]> {
        return this.http
                    .get(`${this.pokemonsUrl}/typeis/${type}`)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getPokemon(id: number): Observable<Pokemon> {
        return this.http
                    .get(`${this.pokemonsUrl}/idis/${id}`)
                    //.get(`${this.pokemonsUrl}/${id}`)
                    .map(res => res.json());
    }

    add(pokeName: string): Observable<Pokemon> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
                    .post(this.pokemonsUrl, JSON.stringify(pokeName), options)
                    .map(res => res.json());
    }

    delete(id: number): Observable<void> {
        const url = `${this.pokemonsUrl}/${id}`;
        return this.http
                    .delete(url, { headers: this.headers })
                    .map(res => res.json());
}
    }