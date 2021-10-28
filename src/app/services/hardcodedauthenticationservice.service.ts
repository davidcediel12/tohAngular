import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Hardcodedauthenticationservice {

  constructor() { }

  authenticate(userId : string, password : string): boolean{
    if(userId != "1088350146" || password != "hola123")
      return false;
    
    localStorage.setItem('userId', userId);
    return true;
  }

  isUserLoggedIn(): boolean{
    return localStorage.getItem("userId") != null;
  }

  logOut(): void {
    localStorage.removeItem("userId");
  }
}
