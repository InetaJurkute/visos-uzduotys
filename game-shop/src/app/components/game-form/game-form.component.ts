import {Component, OnInit, Input} from '@angular/core';
import { DataService } from "app/services/data.service";
import { Game } from 'app/models/game';
import { Genre } from 'app/models/genre';
import { Platform } from 'app/models/platform';
import {Router} from "@angular/router";

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

  optionsMap = {};
  optionsChecked = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    Promise.all([
      this.dataService.getGenres().then(g => { this.genres = g; }),
      this.dataService.getPlatforms().then(p => { this.platforms = p; })
    ]).then(()=> {
      this.platforms.forEach((p) => {
        this.optionsMap[p.id] = false;
      });
    }).then(()=> { this.isLoading = false});

  }

  updateCheckedOptions(option, event) {
    this.optionsMap[option.id] = event.target.checked;
  }

  addNewGame(){
    this.game.platforms = [];
    for(var key in this.optionsMap){
      if(this.optionsMap[key]){
        this.game.platforms.push(key);
      }
    }
    this.game.genre = parseInt(this.game.genre);
    this.game.platforms = this.game.platforms.map(m => parseInt(m));
    this.dataService.addGame(this.game).then( () => this.router.navigate(['manage-games']) );
  }
}
