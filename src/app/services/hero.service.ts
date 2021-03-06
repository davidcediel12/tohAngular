import { Injectable, TemplateRef } from '@angular/core';
import { Hero } from '../hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = `${API_URL}/heroes`; // URL to Springboot API

  constructor(
    private http : HttpClient,
    private messageService : MessageService
  ) { }


  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage("Hero Service: Retrieving heroes data");
    // .pipe to process the observable and catch possible errors 
    return this.http.get<Hero[]>(this.heroesUrl + "/getAll")
      .pipe(
        retry(3), // Try several time to make the HTTP req before throws an error
        /*
         * We use tap to make side things while we're processing the observable
         * In this case, we log something, but we can do more things.
        */
        tap(() => this.log('Fetched Heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }


  getHero(id : number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + `/get?id=${id}`)
            .pipe(
              tap(_ => this.log(`Hero Service: Get hero ${id}`)), 
              catchError(this.handleError<Hero>(`getHero id = ${id}`))
            );
  }



  updateHeroName(hero : Hero): Observable<any> {
    return this.http.patch(this.heroesUrl + `/modifyName/${hero.id}`, hero)
        .pipe(
          tap( _ => this.log(`Hero Service Modifying hero with id = ${hero.id}`)), 
          catchError(this.handleError<any>('updateHero'))
        );
  }


  addHero(hero : Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl + "/newHero", hero)
        .pipe(
          tap((newHero: Hero) => this.log(`Added new hero ${hero.name}`)), 
          catchError(this.handleError<Hero>('AddHero'))
        );
  }


  deleteHero(id : number): Observable<Hero> {
    return this.http.delete<Hero>(this.heroesUrl + `/deleteHero/${id}`).pipe(
      tap(_ => this.log(`Deleting hero id=${id}`)),
      catchError(this.handleError<Hero>("DeleteHero"))
    );
  }


  searchHeroesByName(partOfName : string): Observable<Hero[]> {
    // If we don't have any word to find, we don't do the request to optimize
    if(!partOfName.trim())
      return of([])
    
    return this.http.get<Hero[]>(`${this.heroesUrl}/findByName/?name=${partOfName}`)
      .pipe( 
        tap(find => find.length ? 
               this.log(`Finding ${find.length} matches with length name ${partOfName}`) : 
               this.log(`Not found any matches with  name ${partOfName}`)),
        catchError(this.handleError<Hero[]>("Find By Name", []))
      );
    
  }
  /*
  * Dynamic typing in a function:
  * We can pass multiples Type, for that reason we use T
  */
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


   /** Log a HeroService message with the MessageService */
   private log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`);
  }

}
