import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(){
    this.userService.login(this.username, this.password);
    localStorage.setItem("userName", this.username);
  }
}
