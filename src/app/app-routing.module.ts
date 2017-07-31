import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './dashboard.component';
import { PokemonsComponent } from './pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { AddPokemonComponent } from './add-pokemon.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add', component: AddPokemonComponent },
    { path: 'detail/:id', component: PokemonDetailComponent },
    { path: 'pokemons', component: PokemonsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }