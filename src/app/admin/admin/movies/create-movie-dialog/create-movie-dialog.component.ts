import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Movie } from '../../../../models/movie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../../../services/movie.service';
import { DataTranfererService } from '../../../../services/data-tranferer.service';

@Component({
  selector: 'app-create-movie-dialog',
  templateUrl: './create-movie-dialog.component.html',
  styleUrls: ['./create-movie-dialog.component.scss']
})
export class CreateMovieDialogComponent implements OnInit {
  createdMovie: Movie;
  createMovieFormGroup: FormGroup;

  constructor(
    public thisDialogRef: MatDialogRef<CreateMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    public fb: FormBuilder,
    private movieService: MovieService,
    private dataTransferer: DataTranfererService
  ) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.createMovieFormGroup = this.fb.group({
      TenPhim: ['', Validators.required],
      Trailer: ['', Validators.required],
      HinhAnh: ['', Validators.required],
      MoTa: ['', Validators.required],
      NgayKhoiChieu: ['', Validators.required],
      DanhGia: ['', Validators.required]
    })
  }

  createMovie(movie: Movie, files: any) {
    movie.HinhAnh = files[0].name
    movie.MaNhom = 'GP01'

    this.movieService.createMovie(movie).subscribe(
      res => {
        this.createdMovie = res;
        this.movieService.uploadFile(files[0], this.createdMovie.TenPhim).subscribe(
          res => {
            this.dataTransferer.transferCreatedMovieAdmin(this.createdMovie)
            this.thisDialogRef.close('created')
          }
        )
      }
    )
  }

}
