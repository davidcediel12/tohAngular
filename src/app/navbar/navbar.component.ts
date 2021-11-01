import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../services/basic-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(
    private route: Router,
    public authService: BasicAuthService
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.logOut();
    this.route.navigate(['/login']);
  }
}
