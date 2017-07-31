import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  public pokemons: Pokemon[] = [];
  pokemonImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons.slice(0,9));
  }
  
  getPokemonImageUrl(id: number): string{
    return this.pokemonImageUrl+id+".png";
  }
}