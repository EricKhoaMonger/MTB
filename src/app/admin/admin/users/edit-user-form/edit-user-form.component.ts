import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../../../../models/user';
import { DataTranfererService } from '../../../../services/data-tranferer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss']
})
export class EditUserFormComponent implements OnInit, OnChanges {

  @Input() currentInfo: User

  isEditting: boolean = true;

  editUserFormGroup: FormGroup
  constructor(
    private dataTransferer: DataTranfererService,
    private fb: FormBuilder,
    private userService: UserService,
    public dialog: MatDialog,
    private location: Location
  ) {

  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.createForm()
  }

  triggerBool() {
    this.isEditting = false
    this.dataTransferer.transferBool(this.isEditting)
  }

  confirmEdit(edittedUser: User) {
    this.userService.updateUser(edittedUser).subscribe(
      res => {
        if (typeof (res) == 'object') {
          const dialogRef = this.dialog.open(AlertDialogComponent, {
            data: {
              icon: 'check',
              message: 'Updated Successfully'
            }
          })
          setTimeout(() => {
            dialogRef.close()
            this.location.back()
          }, 2000);
          dialogRef.afterClosed().subscribe(result => {
            this.currentInfo = res
            sessionStorage.setItem('userInfoAdmin', JSON.stringify(this.currentInfo))
          });
        }
      },
      err => console.log(err)
    )
  }

  createForm() {
    this.editUserFormGroup = this.fb.group({
      TaiKhoan: [this.currentInfo.TaiKhoan, Validators.required],
      MatKhau: [this.currentInfo.MatKhau, Validators.required],
      HoTen: [this.currentInfo.HoTen, Validators.required],
      Email: [this.currentInfo.Email, [Validators.required, Validators.email]],
      SoDT: [this.currentInfo.SoDT, Validators.required],
      MaNhom: ['GP01', Validators.required],
      MaLoaiNguoiDung: [this.currentInfo.MaLoaiNguoiDung, Validators.required]
    })
  }
}
