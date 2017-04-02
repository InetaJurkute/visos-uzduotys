import { Injectable } from '@angular/core';
import { Game } from "app/models/game";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InMemoryDataService extends InMemoryDbService {
  createDb(){
    return {
      games: cArrayGames
    };
  }
}

const cArrayGames: Game[] =[
      {
        id: '1',
        name: 'NewHope',
        description: 'a very nice game',
        price: 19.99,
        imageUrl: '../../../assets/1.jpg'
      },
      {
        id: '2',
        name: 'NewHope2',
        description: 'also a nice game',
        price: 22.99,
        imageUrl: '../../../assets/2.jpg'
      },
      {
        id: '3',
        name: 'ShootyShoot',
        description: 'pew pew pew!',
        price: 12.99,
        imageUrl: '../../../assets/3.jpg'
      },
      {
        id: '4',
        name: 'Galaxy Overlords',
        description: 'control the galaxy!',
        price: 49.99,
        imageUrl: '../../../assets/4.jpg'
      },
      {
        id: '5',
        name: 'The Puzzle Game',
        description: 'solve some puzzles',
        price: 14.99,
        imageUrl: '../../../assets/5.jpg'
      }
    ];