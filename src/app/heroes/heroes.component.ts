import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';


@Component({

  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[] = [];
  
  constructor(
    private heroService : HeroService,
    private messageService : MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void{
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes, 
      error => this.handleErrorResponse(error)
      );
  }


  /**
   * ! This function is never triggered because we're handling the errorsw in the service
   * ! Only to show how would it be.
   * @param error Error of the object
   */
  handleErrorResponse(error : Object){
    this.heroes = [{name : "something went wrong", powerName : ":("}];
  }
}
