import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  isLoggedIn: boolean = false;

  constructor() { }

  checkLogInState() {
    let localUser = JSON.parse(localStorage.getItem('currentUser'))

    this.isLoggedIn = localUser != null ? true : false;
  }
}
