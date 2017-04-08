import { Component, OnInit } from '@angular/core';
import { Game } from 'app/models/game';
import { ShoppingCartService } from "../../services/shopping-cart.service"

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {

  // = [] kad būtų... defined what
  gameList: Game[] = [];

  // Private kad nereiktų rašyti vėliau this._dataService ir pan.
  // Private sukuria var čia viduje 
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.gameList = this.shoppingCartService.getItems();
  }

}
