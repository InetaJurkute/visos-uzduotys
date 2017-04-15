import { Component, OnInit, ViewContainerRef } from '@angular/core';
// Models
import { GameItem } from 'app/models/gameItem';
import { Order } from 'app/models/order';
// Services
import { ShoppingCartService } from "../../services/shopping-cart.service"
import { DataService } from "app/services/data.service";
// Toasts
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [DataService]
})
export class ShoppingCartComponent implements OnInit {
  
  successText : string = "";
  // = [] kad būtų... defined what
  gameList: GameItem[] = [];
  // orders: Order[] = [];
  // Private kad nereiktų rašyti vėliau this._dataService ir pan.
  // Private sukuria var čia viduje 
  constructor(private shoppingCartService: ShoppingCartService, private dataService: DataService, public toastr: ToastsManager, vcr: ViewContainerRef) 
  {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.successText = "Not yet purchased";
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
    // I should first check if the order suceeded, but no time
    if (this.gameList.length > 0){
      this.successText = "Thank you for your purchase";
      this.showSuccess();
    }
    else
      return;
    // Do order stuff
    this.dataService.addOrder(this.shoppingCartService.createOrder());
    this.shoppingCartService.removeAll();
  }
  showSuccess() {
        this.toastr.success('You have successfully purchased the games.', 'Purchase succeeded!');
  }
}
