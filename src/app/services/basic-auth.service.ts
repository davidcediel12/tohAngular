import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { Hero } from '../hero';
import { AuthRequest, AuthResponse } from '../login/login.component';
import { User } from '../signup/signup.component';


// Names of the local storage variables, only for avoid spelling errors
export const TOKEN = "token"
export const USER_ID = "userId"


@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  private url : string = `${API_URL}/auth`
  constructor(
    private http : HttpClient
  ) { }

  authenticate(userId : string, password : string): Observable<AuthResponse>{
    let authReq : AuthRequest = new AuthRequest(userId, password);

    return this.http.post<AuthResponse>(`${this.url}/authenticate`, authReq).pipe(
      tap(response => {
        localStorage.setItem(USER_ID, userId);
        localStorage.setItem(TOKEN, response.jwt)
      })
    );
  }


  newUser(newUser : User): Observable<boolean> {
    console.log(`New user: ${newUser.name} ${newUser.lastName} ${newUser.email} ${newUser.password} ${newUser.username}`)
    return this.http.post<boolean>(`${this.url}/newUser`, newUser);
  }


  isUserLoggedIn(): boolean{
    return this.getAuthUser() != null;
  }

  getAuthUser(): string | null{
    return localStorage.getItem(USER_ID);
  }

  getToken(): string | null{
    if(this.getAuthUser() !== null)
      return localStorage.getItem(TOKEN)!;
    return null
  }


  logOut(): void {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(TOKEN);
  }

  
}