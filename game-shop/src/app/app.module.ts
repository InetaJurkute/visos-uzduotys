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
// Jeigu čia importini gali naudot visi moduliai.
import { ShoppingCartService } from "./services/shopping-cart.service";
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameFormComponent } from './components/game-form/game-form.component'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    AboutComponent,
    ManageGamesComponent,
    LoginComponent,
    ShoppingCartComponent,
    GameItemComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    }),
    routing
  ],
  // Jeigu tik čia providini, tada naudoja vieną visoj aplikacijoj
  providers: [UserService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
