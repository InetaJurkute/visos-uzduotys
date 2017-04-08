import { Component, OnInit } from '@angular/core';
// Žaidimas:
import { Game } from 'app/models/game';
// API service:
// import { DataService } from "app/services/data.service";
// Carto service skaičiavimams:
import { ShoppingCartService } from "../../services/shopping-cart.service"
import { forEach } from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  // providers: [DataService]
})
export class ShoppingCartComponent implements OnInit {
  // Loading game info tiesiog iš Game modelio
  // = [] kad būtų... defined what
  gameList: Game[] = [];

  // Private kad nereiktų rašyti vėliau this._dataService ir pan.
  // Private sukuria var čia viduje 
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.gameList = this.shoppingCartService.getItems();
  }

  // Priskiria iš api parimtą stuff į gameList
  // this.dataService.getGameList().then(g => {this.gameList = g} );
  // updateList(){
  //   this.dataService.getGameList().then(g => {this.gameList = g} );
  // }


}
