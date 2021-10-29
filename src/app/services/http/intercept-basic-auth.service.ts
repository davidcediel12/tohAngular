import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptBasicAuthService implements HttpInterceptor {

  constructor() { }


  // Add the authorization header
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username : string = "davidcediel12"
    let password : string = "hola123"
    return next.handle(
        req.clone({
        setHeaders : {
          Authorization : 'Basic ' + window.btoa(username + ":" + password)
        }
      })
    );
  }
}
