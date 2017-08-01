import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl: `./pokemon-detail.component.html`
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;
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
  pokemonImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.pokemonService.getPokemon(+params.get('id'))).subscribe(pokemon => this.pokemon = pokemon);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.pokemonService.update(this.pokemon)
      .subscribe(() => this.goBack());
  }
  getPokemonImageUrl(id: number): string{
    return this.pokemonImageUrl+id+".png";
  }
}