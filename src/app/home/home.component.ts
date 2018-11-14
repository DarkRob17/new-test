import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userClaims: any;
 
  constructor(public router: Router, public userService: UserService) { }
 
  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
 
    });
  }
 
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
