import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart.service"
import { Game } from 'app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  // Hardcoded :/
  genres : string[] = ['Action','Shooter','Horror','Strategy','RPG'];
  constructor(private shoppingCartService: ShoppingCartService)  { }
  
  ngOnInit() {
    
  }

  addItem(){
    this.shoppingCartService.addItem(this.game);
    console.log(this.shoppingCartService.getPrice());
  }
  getPlatforms(){
    var platf : string = '';
    for(var i = 0; i < this.game.platforms.length; i++){
      if(this.game.platforms[i] === null)
        return;
      if (i = 0){
        platf += this.game.platforms[i];
      }
      else
        platf += this.game.platforms[i] + ", ";
    }
    return platf;
  }
  @Input()
  game: Game;
}
//   var plat1 = new Platform { Name = "PC" };
                // var plat2 = new Platform { Name = "Xbox" };
                // var plat3 = new Platform { Name = "PlayStation" };
                // var plat4 = new Platform { Name = "Nintendo" };

                // var genre1 = new Genre { Name = "Action" };
                // var genre2 = new Genre { Name = "Shooter" };
                // var genre3 = new Genre { Name = "Horror" };
                // var genre4 = new Genre { Name = "Strategy" };
                // var genre5 = new Genre { Name = "RPG" };