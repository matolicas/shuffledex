import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public allPokemons: Pokemon[] = [];
  public displayingPokemons: Pokemon[] = [];
  pokemonImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  pageSize = 12;        //quantity of cards per page
  pages: number[] = []; //array of page numbers
  pokeqnt: number;      //quantity of pokemons in the database
  pageqnt: number;      //quantity of pages AKA pages.lenght
  currentPage = 1;      //page being displayed 

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe(
      pokemons => this.slicePokemons(pokemons));
  }

  slicePokemons(pokemons: Pokemon[]) {
    this.allPokemons = pokemons;
    this.pokeqnt = this.allPokemons.length;
    if (this.pokeqnt % this.pageSize == 0) {
      this.pageqnt = this.pokeqnt / this.pageSize;
    } else {
      this.pageqnt = 1 + (Math.floor(this.pokeqnt / this.pageSize));
    }
    for (var i = 1; i <= this.pageqnt; i++) {
      this.pages[i - 1] = i;
    }
    this.displayingPokemons = this.allPokemons
      .slice(
      (this.currentPage * this.pageSize) - this.pageSize
      ,
      ((1 + this.currentPage) * this.pageSize) - this.pageSize
      );
  }

  gotoPage(page: number){
    if(page != this.pageqnt){this.gotoPage(this.pageqnt);}
    this.currentPage = page;
    this.slicePokemons(this.allPokemons);
  }

  getPokemonImageUrl(id: number): string {
    return this.pokemonImageUrl + id + ".png";
  }
}