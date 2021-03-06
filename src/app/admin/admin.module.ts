import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './admin/movies/movies.component';
import { UsersComponent } from './admin/users/users.component';
import { MainDashComponent } from './admin/main-dash/main-dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MoviesTableComponent } from './admin/movies/movies-table/movies-table.component';
import { MovieDialogComponent } from './admin/movies/movie-dialog/movie-dialog.component';
import { PipeModule } from '../pipe/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMovieDialogComponent } from './admin/movies/create-movie-dialog/create-movie-dialog.component';
import { UsersTableComponent } from './admin/users/users-table/users-table.component';
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserFormComponent } from './admin/users/edit-user-form/edit-user-form.component';
import { AlertDialogComponent } from './admin/alert-dialog/alert-dialog.component';


@NgModule({
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    PipeModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [AdminComponent, SideNavComponent, MoviesComponent, UsersComponent, MainDashComponent, MoviesTableComponent, MovieDialogComponent, CreateMovieDialogComponent, UsersTableComponent, UserDetailComponent, AddUserComponent, EditUserFormComponent, AlertDialogComponent],
  exports: [AdminComponent, SideNavComponent, MoviesComponent, UsersComponent, MainDashComponent, MoviesTableComponent, MovieDialogComponent, CreateMovieDialogComponent, UsersTableComponent, UserDetailComponent, AddUserComponent, EditUserFormComponent]
})
export class AdminModule { }
