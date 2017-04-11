import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";
import { Game } from 'app/models/game';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css'],
  providers: [DataService]
})
export class MyGamesComponent implements OnInit {
  myGames: Game[];
  isLoading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getMyGameList().then(g => { this.myGames = g; this.isLoading = false; });
  }

}
