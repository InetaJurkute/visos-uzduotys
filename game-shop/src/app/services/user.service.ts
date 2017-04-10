import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import { Headers, URLSearchParams } from '@angular/http'; //auth
import { tokenIsPresent } from 'ng2-bearer'

@Injectable()
export class UserService {
  constructor(private http: Http, private router: Router) { }

  isLoggedIn(){
    return tokenIsPresent();
  }

  login(username: string, password: string){
    console.log("logging in...");

    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    var body = new URLSearchParams();

    body.set("username", username);
    body.set("password", password);
    body.set("grant_type", "password");

    return this.http.post('http://localhost:64128/api/token', body, {headers: headers})
      .toPromise()
      .then(response => {
        console.log(response);
        if(response.json().access_token){
          localStorage.setItem('access_token', response.json().access_token);
          localStorage.setItem('roles', JSON.parse(response.json().roles));
        }
        if(localStorage.getItem('roles') == 'Customer'){
          this.router.navigate(['game-list']);
        } else if (localStorage.getItem('roles') == 'Admin') {
          this.router.navigate(['manage-games']);
        }
      });
  }

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('roles');
    this.router.navigate(['login']);
  }
}
