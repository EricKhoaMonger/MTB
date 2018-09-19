import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent implements OnInit {
  @Input() discountsList:any;
  constructor() { }

  ngOnInit() {
  }

}
