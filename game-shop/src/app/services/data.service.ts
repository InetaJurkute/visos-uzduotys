import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Game } from "app/models/game";

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
}
