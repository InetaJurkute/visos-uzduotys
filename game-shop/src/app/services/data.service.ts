import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Game } from "app/models/game";

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getGameList(): Promise<Game[]>{
    return this.http.get('/api/games')
      .toPromise()
      .then(response => {
        return response.json().data as Game[];
      });
  }

  getGame(id: string): Promise<Game> {
    return this.http.get('/api/games/' + id)
      .toPromise()
      .then(response => {
        return response.json().data as Game;
      });
  }
}
