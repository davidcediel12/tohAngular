import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Power } from './power';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PowerService {

  powerUrl : string = "http://localhost:8080/power";
  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  };

  
  constructor(
    private messageService : MessageService, 
    private http : HttpClient
  ) { }

  getAllPowers() : Observable<Power[]> {
    return this.http.get<Power[]>(`${this.powerUrl}/getAll`, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Fetching powers`)),
        catchError(this.handleError<Power[]>("Fetching all"))
      );
  }

  log(message : string): void {
    this.messageService.addMessage(message);
  }


  private handleError<T>(operation : string = 'operation', result? : T){
    // Return a function that recieve the error
    return (error : any): Observable<T> => {
      console.error(error);
      // Make the error more readable
      this.log(`operation ${operation} failed: ${error.message}`);
      /*Return an observable of Type T*/
      return of(result as T);
      
    }
  }
}
