import { Injectable } from '@angular/core';
import { Game } from "app/models/game";
import { User } from "app/models/user";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InMemoryDataService extends InMemoryDbService {
  createDb(){
    return {
      games: cArrayGames,
      users: cArrayUsers
    };
  }
}

const cArrayGames: Game[] =[
      {
        id: '1',
        name: 'NewHope',
        description: `Etiam vulputate cursus hendrerit. Etiam ut justo non nisi 
        tempor semper quis fermentum leo. Donec eget libero nulla. Integer et 
        ante libero. Aliquam erat volutpat. Nunc quam ligula, vulputate et 
        mattis tristique, vehicula non mi. Aliquam erat volutpat. Maecenas 
        ultrices sodales quam. Aliquam erat volutpat. Nunc in pharetra erat. 
        Vivamus pretium tincidunt molestie. Vivamus luctus elementum ipsum et v
        estibulum. Donec sit amet nunc eu ligula dignissim posuere vitae eget tellus.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
        turpis egestas. Praesent non sem in justo hendrerit fringilla. Ut rutrum leo 
        ac dui tempus, sed sodales nisl auctor. Pellentesque blandit, nisi ut fermentum 
        lobortis, justo nisi elementum nibh, vel cursus enim ex sit amet nunc. Praesent 
        nisi ligula, cursus accumsan commodo dictum, bibendum lacinia nisl. Aenean consectetur 
        risus at nunc pharetra luctus. Maecenas rutrum molestie quam nec molestie. Nunc id ante mauris.`,
        price: 19.99,
        imageUrl: '../../../assets/1.jpg',
        platforms: [1, 3],
        genre: 2
      },
      {
        id: '2',
        name: 'NewHope2',
        description: 'also a nice game',
        price: 22.99,
        imageUrl: '../../../assets/2.jpg',
        platforms: [1, 2],
        genre: 1
      },
      {
        id: '3',
        name: 'ShootyShoot',
        description: 'pew pew pew!',
        price: 12.99,
        imageUrl: '../../../assets/3.jpg',
        platforms: [1, 4],
        genre: 3
      },
      {
        id: '4',
        name: 'Galaxy Overlords',
        description: 'control the galaxy!',
        price: 49.99,
        imageUrl: '../../../assets/4.jpg',
        platforms: [1, 5],
        genre: 5
      },
      {
        id: '5',
        name: 'The Puzzle Game',
        description: 'solve some puzzles',
        price: 14.99,
        imageUrl: '../../../assets/5.jpg',
        platforms: [1],
        genre: 1
      }
    ];


const cArrayUsers: User[] =[
  {
    id: '1',
    username: 'test',
    password: 'test',
    email: 'test@email.com',
    level: 1
  },
  {
    id: '2',
    username: 'admin',
    password: 'admin',
    email: 'admin@email.com',
    level: 10
  }
];
