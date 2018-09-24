import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { AuthsService } from './auths.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthsService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    if (this.authService.checkUserType()) {
      console.log('Authed');
      
    } else {
      console.log('Not Authed');
      this.router.navigate(['/'])
    }
    
    return this.authService.checkUserType()
  }
}
