import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public _LoginService:LoginService,public _Router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._LoginService.islogedin !== true) {
        // window.alert('Access Denied, Login is Required to Access This Page!');
        this._Router.navigate(['login']);}
    return true;
  }
  
}
