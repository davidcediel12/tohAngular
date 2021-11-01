import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';
import { PowerService } from '../services/power.service';
import { Power } from '../power';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {


  hero: Hero | undefined;
  powers : Power[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private powerService : PowerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.getPowers();
  }


  getPowers(): void {
    console.log("retrieving powers");
    this.powerService.getAllPowers().subscribe(powers => {
      this.powers = powers;
      console.log(powers)});
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }


  changeHeroName(): void {
    if(this.hero)
      this.heroService.updateHeroName(this.hero).subscribe(_ => this.goBack());
  }

  deleteHero(): void {
    if(this.hero && this.hero.id)
      this.heroService.deleteHero(this.hero.id).subscribe(_ => this.goBack());
  }

  goBack(): void { 
    this.location.back();
  }

}
