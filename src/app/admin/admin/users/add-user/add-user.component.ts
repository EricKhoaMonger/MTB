import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';
import { Location } from '@angular/common';
import { DataTranfererService } from '../../../../services/data-tranferer.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserFormGroup: FormGroup

  constructor(
    private dataTransferer: DataTranfererService,
    private fb: FormBuilder,
    private userService: UserService,
    public dialog: MatDialog,
    private location: Location
  ) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.addUserFormGroup = this.fb.group({
      TaiKhoan: ['', Validators.required],
      MatKhau: ['', Validators.required],
      HoTen: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      SoDT: ['', Validators.required],
      MaNhom: 'GP01',
      MaLoaiNguoiDung: ['KhachHang', Validators.required]
    })
  }

  addUser(newUserInfo: any) {
    console.log(newUserInfo);
    
    
    this.userService.signUp(newUserInfo).subscribe(
      (res: any) => { console.log(res);
      
        if (typeof(res) == 'object') {
          const dialogRef = this.dialog.open(AlertDialogComponent,{data: {
            icon: 'check',
            message: 'User Added'
          }})

          setTimeout(() => {
            dialogRef.close()
            this.location.back()
          }, 2000);
        } else {
          const dialogRef = this.dialog.open(AlertDialogComponent,{data: {
            icon: 'not_interested',
            message: res
          }})

          setTimeout(() => {
            dialogRef.close()            
          }, 2000);
         
        }
      },
      (err: any) => console.log(err)
    )
  }
}
