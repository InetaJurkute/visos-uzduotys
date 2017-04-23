import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";
import { Game } from 'app/models/game';
import { Genre } from 'app/models/genre';
import { Platform } from 'app/models/platform';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
  providers: [DataService]
})
export class GameFormComponent implements OnInit {
  game: Game = new Game();
  genres: Genre[];
  platforms: Platform[];
  isLoading: boolean = false;
  isNewGame: boolean;
  optionsMap = {};

  constructor(private route: ActivatedRoute,
              private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.isNewGame = this.isNew();
    if(!this.isNewGame){
      this.route.params.subscribe(params => {this.loadItem(params['id'])});
    }
    Promise.all([
      this.dataService.getGenres().then(g => { this.genres = g; }),
      this.dataService.getPlatforms().then(p => { this.platforms = p; })
    ]).then(()=> {
      this.platforms.forEach((p) => {
        this.optionsMap[p.id] = false;
      });
    }).then(()=> {
      this.isLoading = false;
    });
  }

  loadItem(id: string){
    this.isLoading = true;

    this.dataService.getGame(id)
      .then(g => {
        this.game = g;
        this.game.platforms.forEach((p) => {
          if(this.game.platforms.includes(p)){
            this.optionsMap[p] = true;
          }
        });
        this.isLoading = false;
      });
  }

  isNew(): boolean{
    var currentLocation : string = window.location.toString();
    return (currentLocation.search("addGame") > 0);
  }

  updateCheckedOptions(option, event) {
    this.optionsMap[option.id] = event.target.checked;
  }

  addUpdateGame(){
    this.game.platforms = [];
    for(var key in this.optionsMap){
      if(this.optionsMap[key]){
        this.game.platforms.push(key);
      }
    }
    this.game.genre = parseInt(this.game.genre);
    this.game.platforms = this.game.platforms.map(m => parseInt(m));
    if(this.isNewGame){
      this.dataService.addGame(this.game).then( () => this.router.navigate(['manage-games']) );
    }
    else{
      this.dataService.updateGame(this.game).then( () => this.router.navigate(['manage-games']) );
    }
  }
}
