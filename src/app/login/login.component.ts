import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = { email: '', password: '' };
  usersdata: any;
  constructor(private _LoginService: LoginService,private _Router:Router) {}

  ngOnInit(): void {
  }

  login() {
    this._LoginService
      .getusers(this.user.email, this.user.password)
      .subscribe((n) => {
        this.usersdata = n;
        this._Router.navigate(['/user-profile'])
      });
    console.log(this.usersdata);
  }
}
