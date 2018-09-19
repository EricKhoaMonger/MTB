import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataTranfererService } from '../../../../services/data-tranferer.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  @Output() cost = new EventEmitter();
  public holidays: any[] = [
    {
      Ten: "Combo 1",
      Gia: 25000,
      Hinh: 'https://film.ca/wp-content/uploads/2015/01/Popcorn-Pop-Candy-Combo-Oakville-Movie-Cinema1.jpg'
    },
    {
      Ten: "Combo 2",
      Gia: 35000,
      Hinh: 'http://www.chewonthatblog.com/wp-content/uploads/2012/12/78364441.jpg'
    },
    {
      Ten: "Combo 3",
      Gia: 40000,
      Hinh: 'https://film.ca/wp-content/uploads/2015/01/Oakville-Kids-Combo-Movie-Theatre1.jpg'
    }, {
      Ten: "Combo 4",
      Gia: 45000,
      Hinh: 'http://www.marcustheatres.com/media/images/combo-ultra.jpg'
    },
    {
      Ten: "Combo 5",
      Gia: 55000,
      Hinh: 'https://png.pngtree.com/element_origin_min_pic/17/07/30/debdf75ab52b2d14a9fdc5969aadfd3d.jpg'
    }
  ];
  orderList: any[] = [];
  holidayCost: number = 0;
  constructor(
    private holidayTransferer: DataTranfererService
  ) { }

  ngOnInit() {
  }
  holidayEvent(bool: boolean, item: any) {
    if (bool) {
      this.orderList.unshift(item);
    } else {
      if (this.orderList && this.orderList.length) {
        for (const i in this.orderList) {
          const item1 = this.orderList[i];
          if (item1 === item) {
            this.orderList.splice(+i, 1)
            break
          }
        }
      }
    }
    this.holidayCost = this.orderList
      .map(item => item.Gia)
      .reduce((acc, cur) => acc + cur, 0)

    this.holidayTransferer.transferCost(this.holidayCost, 'holiday')
    // this.cost.emit(this.holidayCost)
  }

}
