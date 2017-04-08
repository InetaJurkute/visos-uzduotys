import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'app/models/game';
import { ShoppingCartService } from "../../services/shopping-cart.service"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  gameList : Game[] = [];
  constructor(private shoppingCartService: ShoppingCartService) 
  { 
    
  }

  ngOnInit() {
    
  }

  addItem(){
    this.shoppingCartService.addItem(this.game);
    console.log(this.shoppingCartService.getPrice());
  }

  @Input()
  game: Game;
}
