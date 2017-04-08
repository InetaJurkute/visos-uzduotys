import { Injectable } from '@angular/core';
import { Game } from 'app/models/game';

@Injectable()
export class ShoppingCartService {

  constructor() { }

  getPrice(gameList : Game[]){
    var price : number = 0;
    for( var i = 0; i < gameList.length; i++){
      price += gameList[i].price; 
      // console.log(gameList[i]);
  }
    console.log(price);
    return price;
  }
}
