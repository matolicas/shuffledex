import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';


import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'add-pokemon',
  templateUrl: `./add-pokemon.component.html`
})
export class AddPokemonComponent {
  @Input() pokemon: Pokemon = {id: null, name: null,  type: null,  baseXP:null,   height: null, weight:null};
  types: string[] = [
    'Bug',
    'Dark',
    'Dragon',
    'Electric',
    'Fairy',
    'Fighting',
    'Fire',
    'Flying',
    'Ghost',
    'Grass',
    'Ground',
    'Ice',
    'Normal',
    'Poison',
    'Psychic',
    'Rock',
    'Steel',
    'Water'
  ];
  constructor(
    private pokemonService: PokemonService,
    private location: Location
  ) { }
  goBack(): void {
    this.location.back();
  }
  add(): void {
    this.pokemonService.add(this.pokemon.name)
      .subscribe();
    this.goBack();
  }
}