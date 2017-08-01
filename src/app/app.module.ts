import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CovalentCoreModule, CovalentLayoutModule } from '@covalent/core';
import { MngtModule } from './view/mngt/mngt.module';
import { SysModule } from './view/sys/sys.module';
import { UserModule } from './view/user/user.module';

import { RouterModule } from '@angular/router';
import { CovalentSearchModule } from '@covalent/core';

//
import { InMemoryWebApiModule } from 'in-memory-web-api-master';
import { InMemoryDataService }  from './in-memory-data.service';

import { AddPokemonComponent } from './add-pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonSearchComponent } from './pokemon-search.component';
import { PokemonsComponent } from './pokemons.component';
import { PokemonService } from './pokemon.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonDetailComponent,
    PokemonSearchComponent,
    PokemonsComponent,
    AddPokemonComponent
  ],
  imports: [
    CovalentSearchModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CovalentCoreModule.forRoot(),
    CovalentLayoutModule.forRoot(),
    MngtModule.forRoot(),
    SysModule.forRoot(),
    UserModule.forRoot(),
    //
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }