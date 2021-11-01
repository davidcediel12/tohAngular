import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthService } from '../services/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
      username : ['', [Validators.pattern('[a-zA-Z0-9]*')]],
      password : ['']
  });

  validLogin : boolean = true;
  
  constructor(
    private authService : BasicAuthService,
    private formBuilder : FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void {
    
  }

  login(): void {
    let username =  this.loginForm.get("username")?.value
    let password = this.loginForm.get("password")?.value

    let jwt : string;
    this.authService.authenticate(username, password).subscribe(
      response => localStorage.setItem("token", response.jwt),
      error => {
        console.log(error);
        this.validLogin = false;
      }
    )
    console.log(this.validLogin);
    if(this.validLogin)
      this.router.navigate(['/heroes'])
  }
}


/**
 * * Classes to handle the login
 */
export class AuthRequest {
  constructor(
    private username : string, 
    private password : string
    ){ }
}

export class AuthResponse {
  constructor(
      public jwt : string
    ){ }
}