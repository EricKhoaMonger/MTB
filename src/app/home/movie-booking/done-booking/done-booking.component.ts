import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user';


@Component({
  selector: 'app-done-booking',
  templateUrl: './done-booking.component.html',
  styleUrls: ['./done-booking.component.scss']
})
export class DoneBookingComponent implements OnInit, OnDestroy {

  cost: number
  bookingInfo: any
  userInfo: User

  seatCost: number
  comboCost: number

  constructor(
  ) { }

  ngOnInit() {
    this.cost = JSON.parse(localStorage.getItem('cost'))
    this.bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'))
    this.userInfo = JSON.parse(localStorage.getItem('currentUser'))

    this.seatCost = this.bookingInfo.DanhSachVe
      .map(seat => seat.GiaVe)
      .reduce((acc, cur) => acc + cur, 0)

      this.comboCost = this.cost - this.seatCost
  }

  ngOnDestroy() {
    localStorage.removeItem('cost')
    localStorage.removeItem('bookingInfo')
  }

}
