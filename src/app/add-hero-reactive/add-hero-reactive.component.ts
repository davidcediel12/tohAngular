import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Power } from '../power';
import { PowerService } from '../power.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-add-hero-reactive',
  templateUrl: './add-hero-reactive.component.html',
  styleUrls: ['./add-hero-reactive.component.css']
})
export class AddHeroReactiveComponent implements OnInit {

  heroForm = this.formBuilder.group({
    persons : this.formBuilder.group({
      name : ['', [Validators.maxLength(10)]],
      alterEgo : [''],
    }),
    power : ['']
  });


  powers : Power[] = [];

  constructor(
    private location : Location,
    private powerService : PowerService,
    private heroService : HeroService,
    private formBuilder : FormBuilder
  ) {}

  ngOnInit(): void {
    this.getPowers();
  }

  onSubmit(){
    // console.warn(this.heroForm.value);
    let newHero : Hero = new Hero(this.heroForm.get('persons.name')?.value, 
                      this.heroForm.get('power')?.value, this.heroForm.get('persons.alterEgo')?.value)

    console.log(newHero);
    this.heroService.addHero(newHero).subscribe(_ => {
      alert('Hero added');
      this.goBack();
    });
    
  }

  getPowers(): void {
    this.powerService.getAllPowers().subscribe(powers => this.powers = powers);
  }

  goBack(): void { 
    this.location.back();
  }

}
