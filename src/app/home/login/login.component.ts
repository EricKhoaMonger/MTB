import { Component, OnInit, ViewChild } from '@angular/core';
import { WOW } from 'wowjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DataTranfererService } from '../../services/data-tranferer.service';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { User } from '../../models/user';
import { AuthsService } from '../../services/auths.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('alertModal') alertModal;
  logInForm: FormGroup;

  localUser: User;
  prevPage: string;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    public dataTrans: DataTranfererService,
    private router: Router,
    public alerts: AlertsService,
    private authsService: AuthsService
  ) {
    this.logInForm = fb.group({
      TaiKhoan: ['', [Validators.required]],
      MatKhau: ['', Validators.required],
    });
  }

  ngOnInit() {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated'
    });
    wow.init();
  }

  userLogIn(userInfo: any) {
    this.localUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.localUser !== null) {
      this.alerts.setDefaults('timeout', '0')
      this.alerts.setMessage('You already signed in!', 'error')
      return;
    }

    if (userInfo !== null) {
      this.userService.logIn(userInfo.TaiKhoan, userInfo.MatKhau).subscribe(
        (data: any) => {
          if (typeof (data) == "object") {
            let userInfo = data;

            localStorage.setItem('currentUser', JSON.stringify(userInfo));
            this.dataTrans.transferUsername(userInfo);
            this.authsService.checkLogInState();

            this.alerts.setMessage('You Are Logged In', 'success')
            this.prevPage = sessionStorage.getItem('prevPage')
            
            setTimeout(() => {
              if(this.prevPage !== null) {
                this.router.navigate([this.prevPage])
                sessionStorage.clear()
              } else {
                console.log(this.prevPage);
                
                this.router.navigate(['/'])
              }
            }, 1500);
          } else {
            this.alerts.setMessage(data, 'error')
          }
        },
        (err: any) => console.log(err)
      );
    }
  }

}
