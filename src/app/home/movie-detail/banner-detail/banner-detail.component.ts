import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-detail',
  templateUrl: './banner-detail.component.html',
  styleUrls: ['./banner-detail.component.scss']
})
export class BannerDetailComponent implements OnInit {
  @Input() movieDetail:any;
  constructor() { }

  ngOnInit() {
  }

}
