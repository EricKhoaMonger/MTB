import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Output() choosingSeats = new EventEmitter();
  @Input() seatDetail: any;
  isBeingChosen: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onChoosing() {
    this.isBeingChosen = !this.isBeingChosen;

    this.choosingSeats.emit(this.isBeingChosen)
  }
}
