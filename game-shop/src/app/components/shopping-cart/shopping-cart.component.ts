import { Component, OnInit } from '@angular/core';
// Models
import { GameItem } from 'app/models/gameItem';
import { Order } from 'app/models/order';
// Services
import { ShoppingCartService } from "../../services/shopping-cart.service"
import { DataService } from "app/services/data.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [DataService]
})
export class ShoppingCartComponent implements OnInit {

  // = [] kad būtų... defined what
  gameList: GameItem[] = [];
  // orders: Order[] = [];
  // Private kad nereiktų rašyti vėliau this._dataService ir pan.
  // Private sukuria var čia viduje 
  constructor(private shoppingCartService: ShoppingCartService, private dataService: DataService) { }

  ngOnInit() {
    this.gameList = this.shoppingCartService.getItems();
     if (this.gameList.length === 0){
       this.shoppingCartService.loadLocalStorage();
       this.gameList = this.shoppingCartService.getItems();
     }
     else{
       this.shoppingCartService.saveLocalStorage();
       this.gameList = this.shoppingCartService.getItems();
    }
}
  
  // Send Order
  sendAll(){
    // this.updateOrder();
    this.dataService.addOrder(this.shoppingCartService.createOrder());
  }
}
