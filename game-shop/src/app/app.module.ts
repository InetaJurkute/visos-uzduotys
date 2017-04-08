import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { routing } from './app.routing';
import { AboutComponent } from './components/about/about.component';
import { ManageGamesComponent } from './components/manage-games/manage-games.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { InMemoryDataService } from "app/services/in-memory-data.service";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    AboutComponent,
    ManageGamesComponent,
    LoginComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
