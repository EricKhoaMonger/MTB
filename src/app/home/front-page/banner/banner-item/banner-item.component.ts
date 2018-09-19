import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent implements OnInit {
  @Input() banner:any;
  constructor() { }

  ngOnInit() {
  }

}
