import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core';
import { UserService } from "app/services/user.service";

@Injectable()
export class CustomerRouteGuard implements CanActivate {
  constructor(private userService: UserService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return (this.userService.isLoggedIn() && localStorage.getItem('roles')=="Customer");
  }
}

@Injectable()
export class AdminRouteGuard implements CanActivate {
  constructor(private userService: UserService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return (this.userService.isLoggedIn() && localStorage.getItem('roles')=="Admin");
  }
}
