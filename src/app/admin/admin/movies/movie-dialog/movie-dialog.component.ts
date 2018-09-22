import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../../../services/movie.service';
import { Movie } from '../../../../models/movie';
import { DataTranfererService } from '../../../../services/data-tranferer.service';


@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {
  movieFormGroup: FormGroup;
  movieTrailer: string;
  needEditting: boolean = false;
  constructor(
    public thisDialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    public fb: FormBuilder,
    private movieService: MovieService,
    private dataTransferer: DataTranfererService
  ) {
    this.createForm()
  }

  ngOnInit() {
    let trailerArr = this.data.Trailer.split('watch?v=');
    this.movieTrailer = trailerArr[0].concat('embed/', trailerArr[1])
  }

  editMovie() {
    this.needEditting = true;

  }

  confirmEditting(edittedMovie: Movie, files?) {
    if (!files.length) return
    edittedMovie.HinhAnh = files[0].name

    this.movieService.updateMovie(edittedMovie).subscribe(
      updatedMovie => {
        this.dataTransferer.transferMovieInfoAdmin(updatedMovie)
        console.log(updatedMovie)
        

        this.movieService.uploadFile(files[0], updatedMovie.TenPhim).subscribe(
          res => {
            this.thisDialogRef.close('updated')
          }
        )

      }
    )

  }

  createForm() {
    this.movieFormGroup = this.fb.group({
      MaPhim: [this.data.MaPhim, Validators.required],
      TenPhim: [this.data.TenPhim, Validators.required],
      Trailer: [this.data.Trailer, Validators.required],
      HinhAnh: [this.data.HinhAnh, Validators.required],
      MoTa: [this.data.MoTa, Validators.required],
      MaNhom: [this.data.MaNhom, Validators.required],
      NgayKhoiChieu: [this.data.NgayKhoiChieu, Validators.required],
      DanhGia: [this.data.DanhGia, Validators.required]
    })
  }

}