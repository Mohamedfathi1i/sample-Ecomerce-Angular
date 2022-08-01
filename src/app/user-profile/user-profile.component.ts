import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthGuard } from './../auth/auth.guard';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  users: any;
  constructor(public authService: LoginService, private _Router: Router) {

  }

  ngOnInit(): void {

    // this.userdata();

    this.authService.getuserdata().subscribe((e)=> this.users =e)


  }
  userdata(){
    this.users =this.authService.getuserdata();
     console.log("hellow");
    console.log(this.users);

  } 
  logout() {
    this.authService.logout();
    this._Router.navigate(['/login']);
  }
}
