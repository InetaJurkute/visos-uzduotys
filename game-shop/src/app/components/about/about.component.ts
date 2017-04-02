import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { DataService } from "app/services/data.service";
import { Game } from 'app/models/game';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [DataService]
})
export class AboutComponent implements OnInit {
  game: Game;
  isLoading: boolean = false;
  
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

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

}
