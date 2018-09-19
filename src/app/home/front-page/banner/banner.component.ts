import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners:any[] =[
    {url:'https://s3img.vcdn.vn/123phim/2018/09/mua-viet-tinh-ca-15362925063460.jpg'},
    {url:'https://s3img.vcdn.vn/123phim/2018/09/meo-map-15362927484218.jpg'},
    {url:'https://s3img.vcdn.vn/123phim/2018/09/hoan-doi-15362929835425.jpg'},
    {url:'https://s3img.vcdn.vn/123phim/2018/08/equalizer-2-15357005619311.jpg'},
    {url:'https://s3img.vcdn.vn/123phim/2018/08/chang-vo-cua-em-15350244757496.jpg'}
  ]

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.home-banner').owlCarousel({
        loop: true,
        nav:true,
        dots: true,
        responsive: {
          0: {
            items: 1,
            nav:false,
            dots: false,
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })
    }, 200);
  }

}
