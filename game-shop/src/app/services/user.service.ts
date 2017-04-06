import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from "app/models/user";

@Injectable()
export class UserService {
  currentUser: User;
  constructor(private http: Http) { }

  getCurrentUser():User{
    return this.currentUser;
  }

  checkLogin(name: string, psw: string){
    return this.getUserList().then( (userList) => {
      this.currentUser = userList.find( user => { //currentUser = user (if it is found in the userList)
        return user.username == name && user.password == psw;
      });
      try{
        if(!this.getCurrentUser()){ //if no such user is found, throw error
          throw new Error("Login failed");
        }
      }catch (err){
        console.log("Login failed");
      }
    });
  }

  getUserList(): Promise<User[]>{
    return this.http.get('/api/users')
      .toPromise()
      .then(response => {
        return response.json().data as User[];
      });
  }

  getUser(id: string): Promise<User> { //not used yet
    return this.http.get('/api/users/' + id)
      .toPromise()
      .then(response => {
        return response.json().data as User;
      });
  }
}
