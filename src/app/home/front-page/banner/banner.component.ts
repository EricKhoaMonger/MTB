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
    {url:'https://i.ytimg.com/vi/2VINv0jkmaE/maxresdefault.jpg'},
    {url:'https://i0.wp.com/vuviphim.com/wp-content/uploads/2018/08/M%C3%A8o-M%E1%BA%ADp-%C4%90i-Ph%C6%B0%E1%BB%A3t-Cats-and-Peachtopia-2018-1.jpg?resize=750%2C463&ssl=1'},
    {url:'http://image.plo.vn/w653/Uploaded/2018/wopsvun/2018_08_08/hoan-doi_emah.jpg'},
    {url:'https://cdn.empireonline.com/jpg/70/0/0/1280/960/aspectfit/0/0/0/0/0/0/c/articles/5afc73508a8b8a97068a20b8/equalizer-2-exclusive-quad.jpg'}
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
