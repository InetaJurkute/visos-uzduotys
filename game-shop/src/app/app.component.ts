import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {

  }

  getRole(): string{
    return localStorage.getItem('roles');
  }

  logout(){
    this.userService.logout();
    localStorage.setItem("userName", "");
  }

  getUserName(){
    return localStorage.getItem("userName");
  }
  
}
