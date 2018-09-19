import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { Subscription } from 'rxjs';
import { DataTranfererService } from '../../services/data-tranferer.service';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.scss']
})
export class MovieBookingComponent implements OnInit, OnDestroy {

  seats:any;
  
  private scheduleId: number
  private paramSub: Subscription
  private scheduleSub: Subscription

  constructor(
    private AR: ActivatedRoute,
    private bookingService: BookingService
    
  ) { }

  ngOnInit() {
    this.paramSub = this.AR.params.subscribe(
      urlParam => this.scheduleId = urlParam.schedule_id
    )
    this.scheduleSub = this.bookingService.getSeats(this.scheduleId).subscribe(
      seats => this.seats = seats
    )
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
    this.scheduleSub.unsubscribe();
  }

}
