import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-nowshowings',
  templateUrl: './nowshowings.component.html',
  styleUrls: ['./nowshowings.component.scss']
})
export class NowshowingsComponent implements OnInit {

  @Input() nowshowingsArr: any[];


  constructor(private _movieService: MovieService) { }

  ngOnInit() {    
    this._movieService.getNowShowings().subscribe(
      (res: any) => {
        this.nowshowingsArr = res;
        setTimeout(() => {
          $('.nowshowings-carousel').owlCarousel({
            loop: true,
            nav:true,
            margin:10,
            dots: false,
            responsive: {
              0: {
                items: 1,
                nav:false
              },
              600: {
                items: 2
              },
              1000: {
                items: 3
              },
              1200: {
                items: 4
              }
            }
          })
        }, 200);

      },
      (err: any) => console.log(err)

    )
  }

}
