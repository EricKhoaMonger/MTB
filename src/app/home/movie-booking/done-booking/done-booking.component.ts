import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-booking',
  templateUrl: './done-booking.component.html',
  styleUrls: ['./done-booking.component.scss']
})
export class DoneBookingComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
    this.message = localStorage.getItem('message')
    localStorage.removeItem('message')
  }

}
