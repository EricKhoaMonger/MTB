import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../models/user'
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { WOW } from 'wowjs';
import { Password } from './../../validators/password';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alerts: AlertsService
  ) {

  }


  public get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated'
    });
    wow.init();

    this.signUpForm = this.fb.group(
      {
        TaiKhoan: ['', [Validators.required]],
        MatKhau: ['', Validators.required],
        HoTen: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        SoDT: ['', Validators.required],
        MaLoaiNguoiDung: 'KhachHang',
        MatKhau2: ['', Validators.required]
      },
      {
        validator: Password.CheckMatching
      })
  }

  userSignUp(value: any) {
    let newUser: User = {
      TaiKhoan: value.TaiKhoan,
      HoTen: value.HoTen,
      MatKhau: value.MatKhau,
      Email: value.Email,
      SoDT: value.SoDT,
      MaLoaiNguoiDung: value.MaLoaiNguoiDung,
      MaNhom: 'GP01'
    };

    this.userService.signUp(newUser).subscribe(
      (res: any) => {
        if (res !== 'Tài khoản đã tồn tại') {
          this.alerts.setMessage('Sign Up Successfully !', 'success');
          setTimeout(() => {
            this.router.navigate(['/login'])
          }, 1500);
        } else {
          this.alerts.setMessage(res, 'error');
        }
      },
      (err: any) => console.log(err)
    )
  }
}
