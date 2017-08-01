import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PokemonSearchService } from './pokemon-search.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  //styleUrls: [ './pokemon-search.component.css' ],
  providers: [PokemonSearchService]
})
export class PokemonSearchComponent implements OnInit {
  pokemons: Observable<Pokemon[]>;
  private searchTerms = new Subject<string>();

  @Input()
  hasBeenClicked: boolean = true;
  @Output()
  emitterHBC: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private pokemonSearchService: PokemonSearchService,
    private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  emitHBC(): void{
    this.emitterHBC.emit(this.hasBeenClicked)
  }

  ngOnInit(): void {
    this.pokemons = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term 
        ? this.pokemonSearchService.search(term)
        : Observable.of<Pokemon[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Pokemon[]>([]);
      });
  }

  gotoDetail(pokemon: Pokemon): void {
    let link = ['/detail', pokemon.id];
    this.router.navigate(link);
    this.search(null);
    this.emitHBC();
  }
}