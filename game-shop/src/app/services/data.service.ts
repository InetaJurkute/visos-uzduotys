import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// Models:
import { Game } from "app/models/game";
import { Genre } from "app/models/genre";
import { Order } from "app/models/order";
// --- End of models
import { Platform } from "app/models/platform";
import { AuthHttp } from "ng2-bearer" //auth

@Injectable()
export class DataService {
  private backendURL: string = "http://localhost:64128";
  //constructor(private http: Http) { }
  constructor(private http: Http, private authHttp: AuthHttp) { //auth
  }

  // Gauna žaidimų sąrašą
  getGameList(): Promise<Game[]>{
    return this.authHttp.get(this.backendURL + '/api/games/')
      .toPromise()
      .then(response => {
        return response.json() as Game[];
      });
  }

  // Gauna žaidimą pagal ID
  getGame(id: string): Promise<Game> {
    return this.authHttp.get(this.backendURL + '/api/games/' + id)
      .toPromise()
      .then(response => {
        return response.json() as Game;
      });
  }

  getGenres(): Promise<Genre[]>{
    return this.http.get(this.backendURL + '/api/genres/')
      .toPromise()
      .then(response => {
        return response.json() as Genre[];
      });
  }

  getPlatforms(): Promise<Platform[]>{
    return this.http.get(this.backendURL + '/api/platforms/')
      .toPromise()
      .then(response => {
        return response.json() as Platform[];
      });
  }

  addGame(game: Game): Promise<void> {
    return this.authHttp.post(this.backendURL + '/api/games/', game)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  deleteGame(id: number): Promise<void> {
    return this.authHttp.delete('http://localhost:64128/api/games/' + id)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }
  addOrder(orders: Order[]): Promise<void> {
    console.log(orders);
    return this.authHttp.post(this.backendURL + '/api/order/', orders)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }
}
