import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataTranfererService } from '../../../services/data-tranferer.service';

@Component({
  selector: 'app-star-rated',
  templateUrl: './star-rated.component.html',
  styleUrls: ['./star-rated.component.scss']
})
export class StarRatedComponent implements OnInit {
  title = 'Star Rated';
  starList: boolean[] = [true, true, true, true, true];
  hasStars: boolean = false;
  rating: number;

  constructor(private starReceiver: DataTranfererService) { }

  ngOnInit() {
    this.starReceiver.stars$.subscribe(
      (stars$ => {
        this.setStar(stars$);
      })
    )
  }

  setStar(data: any) {
    this.rating = data + 1;
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
    this.hasStars = true;

  }

}
