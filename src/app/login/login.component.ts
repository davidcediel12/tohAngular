import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hardcodedauthenticationservice } from '../services/hardcodedauthenticationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
      username : ['', [Validators.pattern('[0-9]*')]],
      password : ['']
  });

  constructor(
    private authService : Hardcodedauthenticationservice,
    private formBuilder : FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    let username =  this.loginForm.get("username")?.value
    let password = this.loginForm.get("password")?.value

    if(this.authService.authenticate(username, password)){
      this.router.navigate(['/heroes'])
    }else{
      alert("Something went wrong")
    }
  }
}
