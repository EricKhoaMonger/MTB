import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { DataTranfererService } from '../../../services/data-tranferer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.scss']
})
export class CombosComponent implements OnInit, OnDestroy {

  totalCost: number = 0;

  orderedList: any[] = [
    {
      cost: 0,
      type: 'holiday'
    },
    {
      cost: 0,
      type: 'drink'
    },
    {
      cost: 0,
      type: 'pop'
    },
  ];

  costSub: Subscription;

  constructor(
    private costReceiver: DataTranfererService,
    private costsTranferer: DataTranfererService
  ) { }

  ngOnInit() {
    this.costSub = this.costReceiver.cost$.subscribe(
      data => {
        if (!data) return

        for (let i = 0; i < this.orderedList.length; i++) {
          if (data.type === this.orderedList[i].type) {
            this.orderedList[i].cost = data.cost
          }
        }

        this.totalCost = this.orderedList.map(item => item.cost).reduce((acc, cur) => acc + cur, 0)

        this.costsTranferer.transferCosts(this.totalCost)
      }
    )
  }

  ngOnDestroy() {
    this.totalCost = 0;
    
    this.costSub.unsubscribe();
  }
}
