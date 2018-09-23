import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: Http) { }

  getUsersList(): Observable<any> {
    let usersApi = 'http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01';

    return this._http.get(usersApi).pipe(
      map((users: Response) => users.json())
    )
  }

  getIdList(): Observable<any> {
    let usersApi = 'http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01';

    return this._http.get(usersApi).pipe(
      map((data: Response) => {
        let users = data.json();
        let IdArr = users.map(user => user.TaiKhoan)
        return IdArr;
      })
    )
  }

  logIn(id, pass): Observable<any> {
    let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${id}&matkhau=${pass}`;
    let logInHeader = new Headers();
    logInHeader.append('Content-Type', 'application/json;charset=UTF-8');

    return this._http.post(url, { Headers: logInHeader }).pipe(
      map((data: Response) => data.json())
    );

  }

  signUp(user: User): Observable<any> {
    let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let signUpHeader = new Headers();
    signUpHeader.append('Content-Type', 'application/json;charset=UTF-8');

    return this._http.post(url, user, { headers: signUpHeader }).pipe(
      map((newUser: Response) => newUser.json())
    )
  }

  updateUser(edittedUser: User): Observable<User> {
    let url = 'http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin';
    let updateHeader = new Headers();
    updateHeader.append('Content-Type', 'application/json; charset = utf-8');

    return this._http.post(url, edittedUser, { headers: updateHeader }).pipe(
      map((res: Response) => res.json())
    )
  }

  // http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=nguyenvana

  removeUser(userId: string): Observable<any> {
    let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userId}`

    return this._http.delete(url).pipe(
      map((res: Response) => res.json())
    )
  }
}
