import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataTranfererService } from '../../../../services/data-tranferer.service';

@Component({
  selector: 'app-popcorns',
  templateUrl: './popcorns.component.html',
  styleUrls: ['./popcorns.component.scss']
})
export class PopcornsComponent implements OnInit {
  @Output() cost = new EventEmitter()
  public popcorns: any[] = [
    {
      Ten: "Bắp rang 50oz - Phô Mai",
      Gia: 55000,
      Hinh: 'https://cdn.shopify.com/s/files/1/1733/1257/products/DSC_0206_1800x.jpg?v=1522806659',
      SoLuong: 0
    },
    {
      Ten: "Bắp rang 60oz - Phô Mai",
      Gia: 65000,
      Hinh: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/8/1/JE0205H_Cacio-Pepe-Popcorn_s4x3.jpg.rend.hgtvcom.616.462.suffix/1481216491893.jpeg',
      SoLuong: 0
    }
  ];
  orderList: any[] = [];
  popcornCost: number = 0;
  constructor(
    private popcornTransferer: DataTranfererService
  ) { }

  ngOnInit() {
  }

  popcornEvent(bool: boolean, item: any) {
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
    this.popcornCost = this.orderList
      .map(item => item.Gia)
      .reduce((acc, cur) => acc + cur, 0);

    this.popcornTransferer.transferCost(this.popcornCost, 'pop')
    // this.cost.emit(this.popcornCost)
  }

}
