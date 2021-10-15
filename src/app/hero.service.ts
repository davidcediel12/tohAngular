import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = "http://localhost:8080/heroes"
  constructor(
    private http : HttpClient,
    private messageService : MessageService
  ) { }


  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage("Hero Service: Retrieving heroes data");
    return this.http.get<Hero[]>(this.heroesUrl + "/getAll");
  }


  getHero(id : number): Observable<Hero> {
    this.messageService.addMessage(`Hero Service: Get hero ${id}`);
    return this.http.get<Hero>(this.heroesUrl + `/get?id=${id}`);
  }
}
