import { Component, OnInit } from '@angular/core';
import { DataTranfererService } from '../../services/data-tranferer.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo: User;
  localUser: any;
  constructor(
    public userInfoGetter: DataTranfererService,
    private router: Router) {
    this.userInfoGetter.username$.subscribe(
      data => {
        if (data !== null) this.userInfo = data
        else return
      }
    )
  }

  ngOnInit() {
    this.localUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.localUser !== null) this.userInfo = this.localUser
    else return
  }

  userSignOut() {
    this.userInfo = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'])
  }

}
