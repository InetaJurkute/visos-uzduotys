import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username : string;
  password : string;
  confirmPassword : string;
  email: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  register(){
    this.userService.register(this.username,this.password,this.confirmPassword,this.email);
  }
}
