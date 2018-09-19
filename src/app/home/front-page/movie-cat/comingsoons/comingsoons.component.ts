import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-comingsoons',
  templateUrl: './comingsoons.component.html',
  styleUrls: ['./comingsoons.component.scss']
})
export class ComingsoonsComponent implements OnInit {
  @Input() comingsoonsArr:any[];
  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit() {
    this._movieService.getComingSoons().subscribe(
      (res: any) => {
        this.comingsoonsArr = res;
        setTimeout(() => {
          $('.comingsoons-carousel').owlCarousel({
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
