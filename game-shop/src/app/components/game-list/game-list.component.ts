import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";
import { Game } from 'app/models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [DataService]
})
export class GameListComponent implements OnInit {
  gameList: Game[];
  isLoading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getGameList().then(g => {
      this.gameList = g; this.isLoading = false; }
      );
  }

}
