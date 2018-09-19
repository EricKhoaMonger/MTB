import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plot-and-trailer',
  templateUrl: './plot-and-trailer.component.html',
  styleUrls: ['./plot-and-trailer.component.scss']
})
export class PlotAndTrailerComponent implements OnInit, OnChanges {
  @Input() movieInfo: any

  movieTrailer: string;
  constructor(private AR: ActivatedRoute) { }

  ngOnInit() {

  }

  ngOnChanges() {
    let trailerArr = this.movieInfo.Trailer.split('watch?v=');
    this.movieTrailer = trailerArr[0].concat('embed/', trailerArr[1])
  }

}
