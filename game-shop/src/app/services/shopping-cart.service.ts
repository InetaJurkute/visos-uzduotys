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
  // createOrder(){
  //   // Create vars:
  //   // Get user id
  //   var userId = userId = localStorage.getItem('id');
  //   // Add order items
  //   var orderItems : OrderItem[] = [];

  //   this.gameList.forEach(game => {
  //     orderItems.push({"amount" : game.Amount, "id" : parseInt(game.Item.id)});
  //   });
  //   // Create order
  //   var order : Order = {"userId" : userId, "orderItem" : orderItems};
  //   return order;
  // }
  // Create and return order (dictionary)
  createOrder(){
    // Create vars:
    // Get user id
    var userId = localStorage.getItem('id');
    // Add order items
    // Dict
    var orderItems : { [id : string]: number ;} = {};
    this.gameList.forEach(game => {
      orderItems[game.Item.id] = game.Amount;
    });
    // Create order
    var order : {} = {"userId" : userId, "orderItems" : orderItems};
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
      }
    }
    if(!gameExists)
        this.gameList.push( { Item : game, Amount : 1} );
    this.saveLocalStorage();
  }
  // Remove game
  removeItem(game : Game){
    for (var i = 0; i < this.gameList.length; i++){
      if (this.gameList[i].Item.id == game.id){
        if (this.gameList[i].Amount > 1){
          this.gameList[i].Amount --;
          console.log(this.gameList[i].Amount);
          return;
        }
        else{
          this.gameList.splice(i,1);
          this.saveLocalStorage();
          return;
        }
      }

    }
    this.saveLocalStorage();
    // console.log("New amount");
     
  }
  removeAll(){
      this.gameList.splice(0,this.gameList.length);
      this.saveLocalStorage();
  }
  
}