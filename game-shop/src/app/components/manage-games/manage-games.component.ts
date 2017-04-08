import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";
import { Game } from 'app/models/game';

@Component({
  selector: 'app-manage-games',
  templateUrl: './manage-games.component.html',
  styleUrls: ['./manage-games.component.css'],
  // providers: [DataService]
})
export class ManageGamesComponent implements OnInit {
  gameList: Game[];
  isLoading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getGameList().then(g => { this.gameList = g; this.isLoading = false; });
  }

}
