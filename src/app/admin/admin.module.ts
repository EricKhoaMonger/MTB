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
  MatInputModule
} from '@angular/material';

import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './admin/movies/movies.component';
import { UsersComponent } from './admin/users/users.component';
import { MainDashComponent } from './admin/main-dash/main-dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UsersTableComponent } from './admin/users/users-table/users-table.component';
import { MoviesTableComponent } from './admin/movies/movies-table/movies-table.component';


@NgModule({
  imports: [
    CommonModule,
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
    MatInputModule
  ],
  declarations: [AdminComponent, SideNavComponent, MoviesComponent, UsersComponent, MainDashComponent, UsersTableComponent, MoviesTableComponent],
  exports: [AdminComponent, SideNavComponent, MoviesComponent, UsersComponent]
})
export class AdminModule { }
