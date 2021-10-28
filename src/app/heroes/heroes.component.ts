import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hardcodedauthenticationservice } from '../services/hardcodedauthenticationservice.service';


@Component({

  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[] = [];
  
  constructor(
    private heroService : HeroService,
    private messageService : MessageService,
    public authService : Hardcodedauthenticationservice
  ) { }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn())
      this.getHeroes();
  }


  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
