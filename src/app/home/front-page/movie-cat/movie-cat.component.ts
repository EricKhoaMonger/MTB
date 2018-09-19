import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';


@Component({
  selector: 'app-movie-cat',
  templateUrl: './movie-cat.component.html',
  styleUrls: ['./movie-cat.component.scss']
})
export class MovieCatComponent implements OnInit {

  categoryStatus: string = 'ns';
  currentList: any[] = [];
  showSpinner: boolean = true;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    if (this.categoryStatus = 'ns') {
      this.movieService.getNowShowings().subscribe(
        (res: any) => {

          this.currentList = res;
          this.showSpinner = false

        },
        (err: any) => console.log(err)
      )
    }


  }
  showNowShowings() {
    this.showSpinner = true
    this.categoryStatus = 'ns';
    this.movieService.getNowShowings().subscribe(
      (res: any) => {
        this.currentList = res;
        this.showSpinner = false
      },
      (err: any) => console.log(err)
    )
  }
  showComingSoons() {
    this.showSpinner = true
    this.categoryStatus = 'cs';
    this.movieService.getComingSoons().subscribe(
      (res2: any) => {
        this.currentList = res2;
        this.showSpinner = false
      },
      (err: any) => console.log(err)
    )
  }

}
