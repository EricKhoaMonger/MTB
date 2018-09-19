import { Component, OnInit } from '@angular/core';
import { DataTranfererService } from '../../../services/data-tranferer.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  title = 'Star Rating';
  starList: boolean[] = [true, true, true, true, true];
  rating: number;

  constructor(private starTransferer: DataTranfererService) { }

  ngOnInit() {
   
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
    this.starTransferer.transferUserStars(this.starList)
  }
}
