import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  isLoggedIn: boolean = false
  isAdmin: boolean = false;

  constructor() { }

  checkLogInState() {
    let localUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = localUser != null ? true : false;
  }

  checkUserType() {
    let localUser = JSON.parse(localStorage.getItem('currentUser'));
    if (localUser != null && localUser.MaLoaiNguoiDung === 'QuanTri') {
      return true;
    } else return false;
  }

  checkLoggedIn () {
    let localUser = JSON.parse(localStorage.getItem('currentUser'));
    return localUser != null ? true : false
  }

}
