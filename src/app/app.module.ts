// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Basic imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Custom app imports
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

/* 
 * Angular Material Components
*/
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';


/*
 * PimeNG Components
*/

import { Button, ButtonModule } from 'primeng/button';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { AddHeroReactiveComponent } from './add-hero-reactive/add-hero-reactive.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AddHeroComponent,
    HeroSearchComponent,
    AddHeroReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatSliderModule, 
    MatIconModule, 
    MatButtonModule, 
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
