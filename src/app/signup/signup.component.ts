import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthService } from '../services/basic-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  validSignUp = true;

  signUpForm = this.fb.group({
    basicInformation : this.fb.group({
      name : ['', [Validators.required, Validators.pattern("([a-zA-Z]\s?)+")]],
      lastName : ['', [Validators.required, Validators.pattern("([a-zA-Z]\s?)+")]],
      email : ['', [Validators.required, Validators.email]]
    }),

    authInformation : this.fb.group({
      username : ['', [Validators.required, Validators.minLength(8)]],
      password : ['', [Validators.required, Validators.pattern(".*[A-Z]+.*[0-9]+.*"), Validators.minLength(8)]]
    })
  })
  constructor(
    private fb : FormBuilder,
    private authService : BasicAuthService,
    private router : Router
  ) { }


  signUp(){
    
    let newUser : User = new User(
      this.signUpForm.get("basicInformation.name")?.value,
      this.signUpForm.get("basicInformation.lastName")?.value,
      this.signUpForm.get("basicInformation.email")?.value,
      this.signUpForm.get("authInformation.username")?.value,
      this.signUpForm.get("authInformation.password")?.value,
    );

    this.authService.newUser(newUser).subscribe(
      (response : boolean) => {
        response ? this.validSignUp = true : this.validSignUp = false;
        this.router.navigate(['login']);
      },
      error => this.validSignUp = false
    );
  }

  ngOnInit(): void {
  }

}



export class User {
  constructor(
    public name : string, 
    public lastName : string, 
    public email : string, 
    public username : string, 
    public password : string) {}
}