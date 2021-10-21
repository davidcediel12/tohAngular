import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { PowerService } from '../power.service';
import { Power } from '../power';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  powers : Power[] | undefined;

  constructor(
    private heroService : HeroService,
    private powerService : PowerService, 
    private location : Location
  ) { }

  ngOnInit(): void {
    this.getPowers();
  }

  getPowers(): void{
    this.powerService.getAllPowers().subscribe(powers => this.powers = powers);
  }

  addHero(heroName : string, powerName : string): void{
    heroName = heroName.trim();
    if(!heroName){ return }

    let hero: Hero =  new Hero(heroName, powerName);


    this.heroService.addHero(hero)
      .subscribe(_ => this.goBack());
  }

  goBack(){
    this.location.back();
  }
}
