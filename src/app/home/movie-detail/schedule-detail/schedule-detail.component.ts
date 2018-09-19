import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { DataTranfererService } from '../../../services/data-tranferer.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() movieInfo: any;
  schedule: Array<{}>
  
  constructor(
    private scheduleInfoTransferer:DataTranfererService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.schedule = this.movieInfo.LichChieu
  }
  ngOnDestroy() {
    this.scheduleInfoTransferer.transferScheduleInfo(this.movieInfo.LichChieu)
  }

}
