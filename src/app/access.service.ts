import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessService {
  // Flag to check if the user is authenticated 
  authenticated: boolean = false;
  url : string = "http://localhost:8080/acess";


  constructor(
    private http : HttpClient
  ) { }

  authenticate(credentials : any, callback : any) {
    // Create a headers, if credential doesn't exists, the headers will be {}
    const headers = new HttpHeaders(credentials ? {
      // btoa -> encrypt a string
      authorization : 'Basic' + btoa(credentials.username + ":" + credentials.password)
    } : {});

    // Send the petition to the api
    this.http.get(`${this.url}/access`, { headers: headers })
      
      .subscribe(response  => {
        if (response.name) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      });

      return callback && callback();

  }

}
