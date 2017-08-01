import { InMemoryDbService } from 'in-memory-web-api-master';
import { Pokemon } from './pokemon'
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons: Pokemon[] = [
    {id:487, name:'Giratina'  , type: 'Ghost'   , baseXP:306, height:45, weight:7500},
    {id:243, name:'Raikou'    , type: 'Electric', baseXP:261, height:19, weight:1780},
    {id:244, name:'Entei'     , type: 'Fire'    , baseXP:261, height:21, weight:1980},
    {id:245, name:'Suicune'   , type: 'Water'   , baseXP:261, height:20, weight:1870},
    {id:716, name:'Xerneas'   , type: 'Fairy'   , baseXP:306, height:30, weight:2150},
    {id:717, name:'Yvetal'    , type: 'Dark'    , baseXP:306, height:58, weight:2030},
    {id:150, name:'Mewtwo'    , type: 'Psychic' , baseXP:306, height:20, weight:1220},
    {id:649, name:'Genesect'  , type: 'Bug'     , baseXP:270, height:15, weight:825 },
    {id:493, name:'Arceus'    , type: 'Normal'  , baseXP:324, height:32, weight:3200},
    {id:488, name:'Cresselia' , type: 'Psychic' , baseXP:270, height:15, weight:856 },
    {id:359, name:'Absol'		  , type:'Dark'     , baseXP:163, height:12, weight:470 },
    {id:448, name:'Lucario'		, type:'Fighting'	, baseXP:184, height:12, weight:540 },
    {id:144, name:'Articuno'	, type:'Ice'		  , baseXP:261, height:17, weight:554 },
    {id:145, name:'Zapdos'		, type:'Electric'	, baseXP:261, height:16, weight:526 },
    {id:146, name:'Moltres'		, type:'Fire'		  , baseXP:261, height:20, weight:600 },
    {id:149, name:'Dragonite'	, type:'Dragon'	  , baseXP:270, height:22, weight:2100},
    {id:485, name:'Heatran'		, type:'Fire'		  , baseXP:270, height:17, weight:4300},
    {id:715, name:'Noivern'		, type:'Flying'	  , baseXP:187, height:15, weight:850 },
    {id:65 , name:'Alakazam'	, type:'Psychic'	, baseXP:225, height:15, weight:480 },
    {id:130, name:'Gyarados'	, type:'Water'		, baseXP:189, height:65, weight:2350},
    {id:641, name:'Tornadus'	, type:'Flying'		, baseXP:261, height:15, weight:630 },
    {id:642, name:'Thundurus'	, type:'Electric' , baseXP:261, height:15, weight:610 },
    {id:645, name:'Landorus'	, type:'Ground'	  , baseXP:270, height:15, weight:680 },
    {id:407, name:'Roserade'	, type:'Grass'		, baseXP:232, height:9 , weight:145 },
    {id:377, name:'Regirock'	, type:'Rock'			, baseXP:261, height:17, weight:2300},
    {id:378, name:'Regice'		, type:'Ice'			, baseXP:261, height:18, weight:1750},
    {id:379, name:'Registeel'	, type:'Steel'		, baseXP:261, height:19, weight:2050},
    {id:486, name:'Regigigas'	, type:'Normal'		, baseXP:302, height:37, weight:4200},
    {id:666, name:'Vivillon'	, type:'Bug'		  , baseXP:185, height:12, weight:170 },
    {id:721, name:'Volcanion'	, type:'Fire'		  , baseXP:270, height:17, weight:1950}
];
    return {pokemons};
  }
}