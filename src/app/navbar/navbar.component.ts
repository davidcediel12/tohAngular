import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardcodedauthenticationservice } from '../services/hardcodedauthenticationservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserAuth : boolean = false;
  constructor(
    private route : Router,
    public authService : Hardcodedauthenticationservice
  ) { }

  ngOnInit(): void {
    this.isUserAuth = this.authService.isUserLoggedIn();
  }

  logOut(){
    this.authService.logOut();
    this.route.navigate(['/login'])
  }

}