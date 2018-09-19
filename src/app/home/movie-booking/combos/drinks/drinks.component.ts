import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataTranfererService } from '../../../../services/data-tranferer.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  @Output() cost = new EventEmitter();

  public drinks: any[] = [
    {
      Ten: "Coke 22oz",
      Gia: 25000,
      Hinh: 'https://www.colbeck.co.uk/wp-content/uploads/2017/11/021120-Coca-Cola-1.5L.jpg'
    },
    {
      Ten: "Coke 30oz",
      Gia: 35000,
      Hinh: 'https://cdn.shopify.com/s/files/1/2231/8055/products/Coke_Regular_Soda_2L_P55_1024x1024.jpg?v=1507012717'
    },
    {
      Ten: "Coke 40oz",
      Gia: 40000,
      Hinh: 'http://www.bigronsbistro.com/wp-content/uploads/2014/02/diet-coke.jpg'
    }
  ];
  orderList: any[] = [];
  drinkCost: number = 0;
  constructor(
    private drinkTransferer: DataTranfererService

  ) { }

  ngOnInit() {
  }

  drinkEvent(bool: boolean, item: any) {
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
    this.drinkCost = this.orderList
      .map(item => item.Gia)
      .reduce((acc, cur) => acc + cur, 0)

      this.drinkTransferer.transferCost(this.drinkCost,'drink')
      // this.cost.emit(this.drinkCost)

  }
}
