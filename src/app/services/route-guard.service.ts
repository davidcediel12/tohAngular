import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BasicAuthService } from './basic-auth.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private route : Router,
    private authService : BasicAuthService
  ) { }

  /**
   * * The function can return several types:
   * 1.Boolean
   * 2.UrlTree
   * 3.Observable of a boolean
   * 4.Observable of a url tree
  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.authService.isUserLoggedIn()){
      this.route.navigate(['/login']);
      return false;
    }
    return true;
  }
}


