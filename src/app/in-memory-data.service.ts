import { InMemoryDbService } from 'in-memory-web-api-master';
import { Pokemon } from './pokemon'
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons: Pokemon[] = [
    {id: 487, name: 'Giratina',  type: 'Dragon | Ghost',  baseXP:306,   height: 45, weight: 7500},
    {id: 243, name: 'Raikou',    type: 'Electric',  baseXP:261,   height: 19, weight: 1780},
    {id: 244, name: 'Entei',     type: 'Fire',   baseXP:261,   height: 21, weight: 1980},
    {id: 245, name: 'Suicune',   type: 'Water',  baseXP:261,   height: 20, weight: 1870},
    {id: 716, name: 'Xerneas',   type: 'Fairy',  baseXP:306,   height: 30, weight: 2150},
    {id: 717, name: 'Yvetal',    type: 'Flying | Dark',   baseXP:306,   height: 58, weight: 2030},
    {id: 150, name: 'Mewtwo',    type: 'Psychic',baseXP:306,   height: 20, weight: 1220},
    {id: 649, name: 'Genesect',  type: 'Steel | Bug',    baseXP:270,   height: 15, weight: 825},
    {id: 493, name: 'Arceus',    type: 'Normal', baseXP:324,   height: 32, weight: 3200},
    {id: 488, name: 'Cresselia', type: 'Psychic',baseXP:270,   height: 15, weight: 856}
];
    return {pokemons};
  }
}