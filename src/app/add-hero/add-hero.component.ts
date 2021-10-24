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
  heroName : string | undefined;
  heroPower: string | undefined;
  alterEgo: string | undefined;
  submitted : boolean = false;

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

  onSubmit(): void{
    this.addHero();
    this.submitted = true;
  }


  addHero(): void{
    let hero: Hero =  new Hero(this.heroName!, this.heroPower!, this.alterEgo);
    this.heroService.addHero(hero)
      .subscribe();
   }

  goBack(){
    this.location.back();
  }
}
