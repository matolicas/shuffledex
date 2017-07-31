import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'my-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
    pokemons: Pokemon[] = [];
    selectedPokemon: Pokemon;

    constructor(
        private pokemonService: PokemonService,
        private router: Router) { }

    onSelect(pokemon: Pokemon): void {
        this.selectedPokemon = pokemon;
    }

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons(): void {
        this.pokemonService.getPokemons().subscribe(pokemons => {
            this.pokemons = pokemons;
            console.log(pokemons);
        });
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPokemon.id])
    }

    gotoAddPokemon(): void {
        this.router.navigate(['/add']);
    }

    delete(pokemon: Pokemon): void {
        this.pokemonService
            .delete(pokemon.id)
            .subscribe();//bug inofensivo aqui
        this.onSelect(null);
        this.router.navigate(['/dashboard']);
    }
}