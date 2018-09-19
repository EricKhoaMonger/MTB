import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: Http
  ) { }

  getSeats(id): Observable<any> {
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${id}`;
    return this.http.get(url).pipe(map((data: Response) => data.json()))
  }

  finishBooking(bookingInfo: any): Observable<any> {
    let url = 'http://sv2.myclass.vn/api/QuanLyDatVe/DatVe';
    let bookingHeader = new Headers();
    bookingHeader.append('Content-Type', 'application/json;charset=utf-8')

    return this.http.post(url, bookingInfo, { headers: bookingHeader }).pipe(
      map((res: Response) => res.json())
    )
  }
}
