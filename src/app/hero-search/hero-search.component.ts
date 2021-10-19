import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$! : Observable<Hero[]>;
  private searchTerm = new Subject<string>();

  constructor(
    private heroService : HeroService
  ) { }

  ngOnInit(): void {
    /*
    * The first two operators (debounceTime and distinctiUntilChanged)
    * help to reduce the http's calls
    */ 
    this.heroes$ = this.searchTerm.pipe(
      // Wait 300ms before search, this because the user can type more things
      debounceTime(300),
      // If is the same term as previous, we will ingore it
      distinctUntilChanged(),
      // Switch to new observable each time the term changes
      switchMap((term : string) => this.heroService.searchHeroesByName(term))
    );
  }


  search(partOfName : string): void {
    this.searchTerm.next(partOfName);
  }



}
