import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";
import { Game } from 'app/models/game';

@Component({
  selector: 'app-manage-games',
  templateUrl: './manage-games.component.html',
  styleUrls: ['./manage-games.component.css'],
  providers: [DataService]
})
export class ManageGamesComponent implements OnInit {
  gameList: Game[];
  isLoading: boolean = false;
  emptyGame: Game[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getGameList().then(g => { this.gameList = g; this.isLoading = false; });
  }

  deleteGame(id){
    this.isLoading = true;
    this.dataService.deleteGame(id).then(()=> {
      this.dataService.getGameList().then(g => { this.gameList = g; this.isLoading = false; });
    });
  }
}
