import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private _http: Http
  ) { }

  getNowShowings(): Observable<Movie[]> {
    let url = 'http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01';

    return this._http.get(url).pipe(
      map((data: Response) => data.json())
    )
  }

  getComingSoons(): Observable<Movie[]> {
    let url = 'http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP08';

    return this._http.get(url).pipe(
      map((data: Response) => data.json())
    )
  }

  getMovieDetail(id): Observable<Movie> {
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;

    return this._http.get(url).pipe(
      map((data: Response) => data.json())
    )
  }

  createMovie(movie: Movie): Observable<Movie> {
    let url = 'http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi';
    let createMovieHeader = new Headers();
    createMovieHeader.append('Content-Type', 'application/json; charser=utf-8')

    return this._http.post(url, movie, { headers: createMovieHeader }).pipe(
      map((res: Response) => res.json())
    )
  }

  removeMovie(movieId): Observable<any> {
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movieId}`

    return this._http.delete(url).pipe(
      map((res: Response) => res.json())
    )
  }

  updateMovie(movie: Movie): Observable<Movie> {
    let url = 'http://sv2.myclass.vn/api/QuanLyPhim/CapNhatPhim';
    let updateHeader = new Headers();
    updateHeader.append('Content-Type', 'application/json; charser=utf-8')

    return this._http.post(url, movie, { headers: updateHeader }).pipe(
      map((res: Response) => res.json())
    )
  }

  uploadFile(file, movieTitle): Observable<any> {
    let url = 'http://sv2.myclass.vn/api/QuanLyPhim/UploadFile';
    let formData = new FormData();
    formData.append('Files', file);
    formData.append('TenPhim', movieTitle)

    return this._http.post(url, formData).pipe(
      map((res: Response) => res.json())
    )
  }
}
