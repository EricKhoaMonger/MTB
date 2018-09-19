import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthsService } from './auths.service';

@Injectable({
  providedIn: 'root'
})
export class BookingGuardService implements CanActivate{

  constructor(
    private router:Router,
    private authsService: AuthsService
  ) { }

  canActivate() {
    this.authsService.checkLogInState();
    if(this.authsService.isLoggedIn) {
      return true
    } else {
      let previousPage = location.pathname;
      sessionStorage.setItem('prevPage',previousPage)
      alert('You need to log in first!')
      this.router.navigate(['/login'])
    }
  }
}
