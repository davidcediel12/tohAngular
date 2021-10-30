import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptBasicAuthService implements HttpInterceptor {
  constructor(private authService: BasicAuthService) {}

  // Add the authorization header
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let token = this.authService.getToken();
    let userId = this.authService.getAuthUser();
    console.log("Im the interceptor");
    console.log(token);
    console.log(userId)

    req = req.clone({
      setHeaders : {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      }
    })
    if (userId != null && token != null){
      token = "Bearer " + token;
      console.log("Inside the validations")
      req = req.clone({
        setHeaders: {
          'Authorization' : token,
        },
      });
    }
    console.log("My header auth is" + req.headers.get("Authorization"));
    return next.handle(req);
  }
}
