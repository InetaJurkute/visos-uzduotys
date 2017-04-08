import { Injectable } from '@angular/core';
import { Game } from 'app/models/game';

@Injectable()
export class ShoppingCartService {

  games : Game[] = [];
  
  constructor() { }

//   // Update and display price
  getPrice(){
    var price : number = 0;
    for( var i = 0; i < this.games.length; i++){
      price += this.games[i].price; 
    }
    return price;
  }
//   // Get all games that are in the cart
  getItems() : Game[]{
    return this.games;
  }
//   // Add one game to the cart
  addItem(game : Game){
    this.games.push(game);
  }
//   // Remove by name, change to id later.
  removeItem(game :Game){
    this.games = this.games.filter(game1 => game1.name !== game.name);
  }
}