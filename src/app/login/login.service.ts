import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  islogin: boolean = false;
  userdata: any;
  userdetails: any;
  errordata: any;

  constructor(private _HttpClient: HttpClient) {}

  getusers(user: string, pass: string): Observable<any> {
    return this._HttpClient
      .post('https://dummyjson.com/auth/login', {
        username: user,
        password: pass,
      })
      .pipe(
        map((user) => {
          if (user) {
            this.userdata = user;
            localStorage.setItem('currentuser', JSON.stringify(this.userdata));
            console.log(this.islogin);
          }
        })
        // ,catchError((err) => this.handleError(err))
        // ,catchError(this.handleError)
      );
  }

  // getusers2(user: string, pass: string) {
  //    this._HttpClient.post('https://dummyjson.com/auth/login', {
  //       username: user,
  //       password: pass,
  //     }).toPromise().then((data:any)=>console.log(data));
  // }

  getuserdata() {
    this.userdetails = JSON.parse(localStorage.getItem('currentuser') || '{}');
    return this._HttpClient.get(
      'https://dummyjson.com/users/' + this.userdetails.id
    );
  }

  getAuthorizationToken() {
    const currentuser = JSON.parse(localStorage.getItem('currentuser') || '{}');
    return currentuser.token;
  }

  get islogedin(): boolean {
    if (localStorage.getItem('currentuser')) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('currentuser');
  }
}
