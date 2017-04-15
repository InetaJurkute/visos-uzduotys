import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart.service"
import { Game } from 'app/models/game';
// Toasts
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, public toastr: ToastsManager, vcr: ViewContainerRef)
  {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

  }

  addItem(){
    this.shoppingCartService.addItem(this.game);
    this.showSuccess();
  }
  showSuccess() {
        this.toastr.success("The game \'" + this.game.name + "\'has been added to your cart.", 'Game added to cart!');
  }
  @Input()
  game: Game;
}
