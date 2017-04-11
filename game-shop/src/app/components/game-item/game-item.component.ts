import { Component, OnInit, Input} from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart.service"
import { GameItem } from 'app/models/gameItem';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})

// Will be used to display/manage games in shopping cart
export class GameItemComponent implements OnInit {

  // gameList : GameItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }
  // So i can use this.item

  getTotal(){
    return (this.item.Item.price * this.item.Amount).toFixed(2);
  }
  @Input()
  item: GameItem;
}
