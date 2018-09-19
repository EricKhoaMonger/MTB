import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private _http: Http
  ) { }

  getNowShowings(): Observable<any> {
    let url = 'http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01';

    return this._http.get(url).pipe(
      map((data: Response) => data.json())
    )
  }

  getComingSoons(): Observable<any> {
    let url = 'http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP08';

    return this._http.get(url).pipe(
      map((data: Response) => data.json())
    )
  }

  getMovieDetail(id) {
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;

    return this._http.get(url).pipe(
      map((data: Response) => data.json())
    )
  }
}
