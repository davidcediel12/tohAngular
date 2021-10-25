import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Power } from '../power';
import { PowerService } from '../power.service';
import { FormBuilder, Validators } from '@angular/forms';
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
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.getPowers();
  }



  onSubmit(){
    console.warn(this.heroForm.value);
  }
  getPowers(): void {
    this.powerService.getAllPowers().subscribe(powers => this.powers = powers);
  }
  goBack(): void { 
    this.location.back();
  }

}
