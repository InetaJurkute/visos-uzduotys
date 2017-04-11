import { Injectable } from '@angular/core';
// Models
import { Game } from 'app/models/game';
import { GameItem } from 'app/models/gameItem';
import {Order} from 'app/models/Order';
import {OrderItem} from 'app/models/OrderItem';

@Injectable()
export class ShoppingCartService {
  
  gameList : GameItem[] = [];
  // orders : Order;
  constructor() { }
  
  // Local storage saving/loading
  
  loadLocalStorage(){
    this.gameList = JSON.parse(localStorage.getItem("cartItems"));
  }
  saveLocalStorage(){
    localStorage.setItem("cartItems", JSON.stringify(this.gameList));
  }
  
  // Local storage end

  // Create and return order
  createOrder(){
    // Create vars:
    // Get user id
    var userId = userId = localStorage.getItem('id');
    // Add order items
    var orderItems : OrderItem[] = [];

    this.gameList.forEach(game => {
      orderItems.push({"amount" : game.Amount, "id" : parseInt(game.Item.id)});
    });
    // Create order
    var order : Order = {"userId" : userId, "orderItem" : orderItems};
    return order;
  }
  // Returns all games price
  getPrice(){
    var price : number = 0;
    for( var i = 0; i < this.gameList.length; i++){
      price += this.gameList[i].Item.price * this.gameList[i].Amount; 
    }
    return price.toFixed(2);
  }
  // Get all gameList that are in the cart
  getItems() : GameItem[]{
    return this.gameList;
  }
  // Add one game to the cart or add to the amount
  addItem(game : Game){
    for (var i = 0; i < this.gameList.length; i++){

      var gameExists : Boolean = false;

      if (this.gameList[i].Item.id === game.id){
        gameExists = true;
        this.gameList[i].Amount++;
        // 
        break;
      }
    }
    if(!gameExists)
        this.gameList.push( { Item : game, Amount : 1} );
  }
  // Remove game
  removeItem(game : Game){
    if (this.gameList.length == 0)
      return;
    console.log("Given id:")
    console.log(game.id);
      console.log("Game Ids:");
    for (var i = 0; i < this.gameList.length; i++){
      console.log(this.gameList[i].Item.id);
      if (this.gameList[i].Item.id == game.id){
        console.log("ID MATCH");
        if (this.gameList[i].Amount > 1){
          this.gameList[i].Amount --;
          console.log(this.gameList[i].Amount);
          return;
        }
        else{
          this.gameList.splice(i,1);
          console.log(this.gameList[i].Amount);
          return;
        }
      }
    }
    console.log("New amount");
    
  }
  
}