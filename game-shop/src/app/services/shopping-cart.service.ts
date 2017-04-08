import { Injectable } from '@angular/core';
import { Game } from 'app/models/game';
import { GameItem } from 'app/models/gameItem';
@Injectable()
export class ShoppingCartService {
  
  games : GameItem[] = [];

  constructor() { }
  // Update and display price
  getPrice(){
    var price : number = 0;
    for( var i = 0; i < this.games.length; i++){
      price += this.games[i].Item.price * this.games[i].Amount; 
    }
    return price;
  }
  // Get all games that are in the cart
  getItems() : GameItem[]{
    return this.games;
  }
  
  // Add one game to the cart or add to the amount
  addItem(game : Game){
    for (var i = 0; i < this.games.length; i++){

      var gameExists : Boolean = false;

      if (this.games[i].Item.id === game.id){
        gameExists = true;
        this.games[i].Amount++;
        // 
        break;
      }
    }
    if(!gameExists)
        this.games.push( { Item : game, Amount : 1} );
  }

  removeItem(game : Game){
    if (this.games.length == 0)
      return;
    console.log("Given id:")
    console.log(game.id);
      console.log("Game Ids:");
    for (var i = 0; i < this.games.length; i++){
      console.log(this.games[i].Item.id);
      if (this.games[i].Item.id == game.id){
        console.log("ID MATCH");
        if (this.games[i].Amount > 1){
          this.games[i].Amount --;
          console.log(this.games[i].Amount);
          return;
        }
        else{
          this.games.splice(i,1);
          console.log(this.games[i].Amount);
          return;
        }
      }
    }
    console.log("New amount");
    
  }
  
}