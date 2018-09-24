import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Movie } from '../../../../models/movie'
import { MovieService } from '../../../../services/movie.service';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { DataTranfererService } from '../../../../services/data-tranferer.service';
import { CreateMovieDialogComponent } from '../create-movie-dialog/create-movie-dialog.component'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss'],
})
export class MoviesTableComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Movie>;
  updatedMovie: Movie


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private movieService: MovieService,
    public dialog: MatDialog,
    private dataReceiver: DataTranfererService,
    private createdMovieReceiver: DataTranfererService,
    private breakpointObserver: BreakpointObserver,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.movieService.getNowShowings().subscribe(
      movies => {
        this.loadData(movies)
      }
    )

    this.dataReceiver.movieInfoAdmin$.subscribe(
      updatedMovie => {
        if (updatedMovie == null) return

        this.updatedMovie = updatedMovie
      }
    )

    this.breakpointObserver.observe(['(min-width:576px)']).subscribe(
      ((state: BreakpointState) => {
        if (state.matches) {
          this.displayedColumns = ['MaPhim', 'TenPhim', 'DanhGia', 'Action']
        } else {
          this.displayedColumns = ['TenPhim', 'Action']
        }
      })
    )
  }

  loadData(array: Array<any>) {
    this.dataSource = new MatTableDataSource(array)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openMovieDetailDialog(movie) {

    let dialogRef = this.dialog.open(MovieDialogComponent, { data: movie });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'updated') {
        let outdatedMovieIndex = this.dataSource.filteredData.indexOf(movie)

        this.dataSource.data.splice(outdatedMovieIndex, 1, this.updatedMovie)

        this.loadData(this.dataSource.data)
      }
    });
  }

  removeMovie(movie) {

    let movieIndex = this.dataSource.filteredData.indexOf(movie)

    this.movieService.removeMovie(movie.MaPhim).subscribe(
      res => {
        if (res === 'Xóa phim thành công!') {
          const dialogRef = this.matDialog.open(AlertDialogComponent, {
            data: {
              icon: 'check',
              message: res
            }
          })

          setTimeout(() => {
            dialogRef.close()
            this.dataSource.data.splice(movieIndex, 1)
            this.loadData(this.dataSource.data)
          }, 2000);


        }
      }
    )
  }

  openCreateMovieDialog() {
    let dialogRef = this.dialog.open(CreateMovieDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'created') {

        this.createdMovieReceiver.createdMovie$.subscribe(
          movie => {
            this.dataSource.data.unshift(movie)
            this.loadData(this.dataSource.data)
            this.paginator.firstPage()
          }
        )
      }
    });
  }
}
