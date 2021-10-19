import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(
    private heroService : HeroService,
    private location : Location
  ) { }

  ngOnInit(): void {
  }



  addHero(heroName : string): void{
    heroName = heroName.trim();
    if(!heroName){ return }

    let hero: Hero = {
      name: heroName
    };


    this.heroService.addHero(hero)
      .subscribe(_ => this.goBack());
  }

  goBack(){
    this.location.back();
  }
}
