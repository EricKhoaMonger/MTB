import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { User } from '../../../../models/user';
import { DataTranfererService } from '../../../../services/data-tranferer.service';
import { UserService } from '../../../../services/user.service';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy, OnChanges {

  profilePic = 'https://www.nztcc.org/themes/kos/images/avatar.png';
  needEditting: boolean = false;

  userInfo: User
  updatedUser
  constructor(
    private dataReceiver: DataTranfererService,
    private userService: UserService,
    private dialog: MatDialog,
    private location: Location
  ) { }

  ngOnInit() {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfoAdmin'))
    if (this.userInfo == null) {
      this.dataReceiver.userInfo$.subscribe(
        data => {
          this.userInfo = data
          sessionStorage.setItem('userInfoAdmin', JSON.stringify(this.userInfo))
        }
      )
    }


    this.dataReceiver.bool$.subscribe(
      bool => {
        if (bool == null) return
        else this.needEditting = bool
      }
    )
  }

  ngOnChanges() {
    // this.userInfo = JSON.parse(sessionStorage.getItem('userInfoAdmin'))

  }

  ngOnDestroy() {
    sessionStorage.removeItem('userInfoAdmin')
  }

  removeUser(userId: string) {
    this.userService.removeUser(userId).subscribe(
      res => {
        if (res === 'Tài khoản không tồn tại!') {
          const dialogRef = this.dialog.open(AlertDialogComponent, {
            data: {
              icon: 'not_interested',
              message: res
            }
          })

          setTimeout(() => {
            dialogRef.close()
          }, 2000);
        } else {
          const dialogRef = this.dialog.open(AlertDialogComponent, {
            data: {
              icon: 'check',
              message: res
            }
          })
          setTimeout(() => {
            dialogRef.close()
            this.location.back()
          }, 2000);
        }


      },
      err => console.log(err)
    )
  }

}
