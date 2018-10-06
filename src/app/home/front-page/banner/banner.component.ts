import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners: any[] = [
    { url: 'https://pre00.deviantart.net/e3e0/th/pre/f/2012/165/2/f/deadpool___2014_teaser_movie_banner_by_crustydog-d53hucm.jpg' },
    { url: 'https://1.bp.blogspot.com/-NKM75UnAN60/Wt69l0Nt1pI/AAAAAAAA8nM/0KbPv3Ct008_UfGsAOpKA5Mn2MWEErusQCLcBGAs/s1600/Marvel%2527s%2BVenom%2BTeaser%2BOne%2BSheet%2BMovie%2BPoster.png' },
    { url: 'http://cdn.collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg' },
    { url: 'https://i.imgur.com/rD8Unfk.jpg' }
  ]

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.home-banner').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
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
