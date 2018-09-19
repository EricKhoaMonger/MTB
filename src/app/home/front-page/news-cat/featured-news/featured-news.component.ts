import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-news',
  templateUrl: './featured-news.component.html',
  styleUrls: ['./featured-news.component.scss']
})
export class FeaturedNewsComponent implements OnInit {
  @Input() featuredItem:any;
  constructor() { }

  ngOnInit() {
  }

}
