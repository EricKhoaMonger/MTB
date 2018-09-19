import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from './../../models/movie'
import { Subscription } from 'rxjs';
import { DataTranfererService } from '../../services/data-tranferer.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  public movieDetail: Movie;
  private movieId: string;
  private idSubcription: Subscription;
  private movieSubcription: Subscription;

  starCount: number = 0;
  detailStatus:string = 'schedule'

  constructor(
    private AR: ActivatedRoute,
    private movieService: MovieService,
    private starTransferer: DataTranfererService
  ) { }

  ngOnInit() {
    this.idSubcription = this.AR.params.subscribe(
      (urlParam => {
        this.movieId = urlParam.id;
      })
    );

    this.movieSubcription = this.movieService.getMovieDetail(this.movieId).subscribe(
      (movieData => {
        this.movieDetail = movieData;

        this.starCount = Number(this.movieDetail.DanhGia) - 1;
        this.starTransferer.transferStarData(this.starCount)
      })
    );
  }

  
  showSchedules() {
    this.detailStatus = 'schedule'
  }
  showPAT() {
    this.detailStatus = 'pat'
  }
  showReviews() {
    this.detailStatus = 'review'
  }
  
  ngOnDestroy() {
    this.idSubcription.unsubscribe()
    this.movieSubcription.unsubscribe()
  }
}
