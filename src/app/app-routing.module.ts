import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { AddHeroReactiveComponent } from './add-hero-reactive/add-hero-reactive.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';


const routes: Routes = [
  { path : '', redirectTo : '/login', pathMatch : 'full'},
  { path : 'heroes', component : HeroesComponent, canActivate : [RouteGuardService] },
  { path : 'dashboard', component : DashboardComponent, canActivate: [RouteGuardService]},
  { path : 'detail/:id', component : HeroDetailComponent, canActivate: [RouteGuardService]},
  // { path : 'newHero', component : AddHeroComponent},
  { path: 'newHero', component : AddHeroReactiveComponent, canActivate: [RouteGuardService]},
  { path: 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
