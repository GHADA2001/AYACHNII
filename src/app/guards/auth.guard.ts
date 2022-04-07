import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }
  constructor (private authService: AuthService, private router : Router) {}
   canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.isAdmin())
       return true;
        else {
           this.router.navigate(['app-forbidden']);
            return false; 
          }
        }
  
}
