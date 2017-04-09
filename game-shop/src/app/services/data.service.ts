import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Game } from "app/models/game";
import { Genre } from "app/models/genre";
import { Platform } from "app/models/platform";

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  // Gauna žaidimų sąrašą
  getGameList(): Promise<Game[]>{
    return this.http.get('http://localhost:64128/api/games/')
      .toPromise()
      .then(response => {
        return response.json() as Game[];
      });
  }

  // Gauna žaidimą pagal ID
  getGame(id: string): Promise<Game> {
    return this.http.get('http://localhost:64128/api/games/' + id)
      .toPromise()
      .then(response => {
        return response.json() as Game;
      });
  }

  getGenres(): Promise<Genre[]>{
    return this.http.get('http://localhost:64128/api/genres/')
      .toPromise()
      .then(response => {
        return response.json() as Genre[];
      });
  }

  getPlatforms(): Promise<Platform[]>{
    return this.http.get('http://localhost:64128/api/platforms/')
      .toPromise()
      .then(response => {
        return response.json() as Platform[];
      });
  }

  addGame(game: Game): Promise<void> {
    return this.http.post('http://localhost:64128/api/games/', game)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  deleteGame(id: number): Promise<void> {
    return this.http.delete('http://localhost:64128/api/games/' + id)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }
}
