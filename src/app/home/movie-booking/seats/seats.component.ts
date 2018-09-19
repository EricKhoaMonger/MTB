import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { DataTranfererService } from '../../../services/data-tranferer.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { BookingService } from '../../../services/booking.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})

export class SeatsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() seats: any;

  scheduleObj: any;
  localUser: User;

  occupieds: number = 0;
  availables: number = 0;

  onChoosingSeatsArr: any[] = [];
  totalCost: number = 0;
  totalComboCost: number = 0;

  private scheduleSub: Subscription
  private costsSub: Subscription

  constructor(
    private scheduleInfoReceiver: DataTranfererService,
    private costsReceiver: DataTranfererService,
    private router: Router,
    private bookingService: BookingService,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    this.scheduleObj = JSON.parse(localStorage.getItem('scheduleObj'));
    this.localUser = JSON.parse(localStorage.getItem('currentUser'));

    this.costsSub = this.costsReceiver.costs$.subscribe(
      data => {
        this.totalComboCost = data
      }
    )
  }

  ngOnChanges() {
    if (this.scheduleObj == null) {
      this.scheduleSub = this.scheduleInfoReceiver.scheduleInfo$.subscribe(
        schedules => {
          schedules.forEach(schedule => {
            if (this.seats.MaLichChieu === schedule.MaLichChieu) {
              this.scheduleObj = schedule;
              localStorage.setItem('scheduleObj', JSON.stringify(this.scheduleObj))
            }
          });
        }
      )
    }

    for (const seat of this.seats.DanhSachGhe) {
      if (seat.DaDat) {
        this.occupieds++;
      } else this.availables++;
    }

  }

  onChoosingSeats(bool: boolean, seat: any) {
    if (bool) {
      this.onChoosingSeatsArr.push(seat);
      this.occupieds++;
      this.availables--;
    } else {
      for (const i in this.onChoosingSeatsArr) {
        const element = this.onChoosingSeatsArr[i];
        if (element === seat) {
          this.onChoosingSeatsArr.splice(+i, 1);
          this.availables++;
          this.occupieds--;
        }
      }
    }

    this.totalCost = this.onChoosingSeatsArr
      .map(seat => seat.GiaVe)
      .reduce((accumulator, current) => accumulator + current, 0)
  }

  confirmBooking() {
    let newList = this.onChoosingSeatsArr.map(item => {
      return {
        MaGhe: item.MaGhe,
        GiaVe: item.GiaVe
      }
    });
    let bookingInfo = {
      MaLichChieu: this.scheduleObj.MaLichChieu,
      TaiKhoanNguoiDung: this.localUser.TaiKhoan,
      DanhSachVe: newList
    }

    this.bookingService.finishBooking(bookingInfo).subscribe(
      (res: any) => {
        console.log(`
        ${res}
        Total Cost: ${this.totalCost + this.totalComboCost}`)
        this.alerts.setMessage(
          `Successfully booked tickets !
          Thanks for choosing MTB <3
        `, 'success')
        localStorage.setItem(
          'message',
          `${res}
          Total Cost: ${this.totalCost + this.totalComboCost}`
        )
        setTimeout(() => {
          this.router.navigate(['/done', this.scheduleObj.MaLichChieu])
        }, 1000);
      },
      (err: any) => console.log(err)
    )
  }

  ngOnDestroy() {
    this.totalComboCost = 0;
    localStorage.removeItem('scheduleObj');
    this.scheduleSub.unsubscribe();
    this.costsSub.unsubscribe()
  }
}
