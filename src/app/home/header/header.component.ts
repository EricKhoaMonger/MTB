import { Component, OnInit } from '@angular/core';
import { DataTranfererService } from '../../services/data-tranferer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo: any;
  localUser:any;
  constructor(
    public userInfoGetter: DataTranfererService,
    private router:Router) { }

  ngOnInit() {
    this.localUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.localUser == null) {
      this.userInfoGetter.username$.subscribe(
        (data: any) => {
          this.userInfo = data;
          console.log(this.userInfo);
          
        },
        (err: any) => console.log(err)
      )
    } else {
      this.userInfo = this.localUser
    };

  }

  userSignOut() {
    this.userInfo = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'])
  }

}
