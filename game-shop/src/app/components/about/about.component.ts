import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "app/services/data.service";
import { Game } from 'app/models/game';
import { ShoppingCartService } from "../../services/shopping-cart.service"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [DataService]
})
export class AboutComponent implements OnInit {
  game: Game;
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private dataService: DataService,
              private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {this.loadItem(params['id'])});
  }

  loadItem(id: string){
  this.isLoading = true;

  this.dataService.getGame(id)
      .then(g => {
        this.game = g;
        this.isLoading = false;
      });
  }

  addItem(){
    this.shoppingCartService.addItem(this.game);
    console.log(this.shoppingCartService.getPrice());
  }

}
