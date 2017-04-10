
import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";
import {Router, NavigationEnd} from "@angular/router";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService, router: Router) {
    /*
    router.events.subscribe( (event) => { //each time url changes catch that event
      if(event instanceof NavigationEnd){  //NavigationEnd - url change event
        if( !(this.loggedInUser = this.userService.getCurrentUser()) ){
          router.navigate(['/login']); // change route to /login if no currentUser
        }
      }
    });
    */
  }

  ngOnInit() {

  }

  getRole(): string{
    return localStorage.getItem('roles');
  }

  logout(){
    this.userService.logout();
  }
}
