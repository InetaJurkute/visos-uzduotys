import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  @Input()
  game: Game;
}
