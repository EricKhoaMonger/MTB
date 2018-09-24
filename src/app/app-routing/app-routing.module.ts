import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from '../home/home-layout/home-layout.component';
import { FrontPageComponent } from '../home/front-page/front-page.component';
import { LoginComponent } from '../home/login/login.component';
import { LoginSignupComponent } from '../home/front-page/login-signup/login-signup.component';
import { SignupComponent } from '../home/signup/signup.component';
import { MovieDetailComponent } from '../home/movie-detail/movie-detail.component';
import { MovieBookingComponent } from '../home/movie-booking/movie-booking.component';
import { BookingGuardService } from '../services/booking-guard.service';
import { DoneBookingComponent } from '../home/movie-booking/done-booking/done-booking.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { MoviesComponent } from '../admin/admin/movies/movies.component';
import { UsersComponent } from '../admin/admin/users/users.component';
import { MainDashComponent } from '../admin/admin/main-dash/main-dash.component';
import { UserDetailComponent } from '../admin/admin/users/user-detail/user-detail.component';
import { UsersTableComponent } from '../admin/admin/users/users-table/users-table.component';
import { AddUserComponent } from '../admin/admin/users/add-user/add-user.component';
import { AdminGuard } from '../services/admin.guard';
import { LoginGuard } from '../services/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: FrontPageComponent
      },
      {
        path: 'login',
        component: LoginSignupComponent,
        canActivate:[LoginGuard],
        children: [
          {
            path: '',
            component: LoginComponent
          }
        ]
      },
      {
        path: 'signup',
        component: LoginSignupComponent,
        children: [
          {
            path: '',
            component: SignupComponent
          }
        ]
      },
      {
        path: 'movie-detail/:id',
        component: MovieDetailComponent
      },
      {
        path: 'done/:schedule_id',
        component: DoneBookingComponent
      },
      {
        path: 'booking/:schedule_id',
        component: MovieBookingComponent,
        canActivate: [BookingGuardService]
      },
    ]
  },
  {
    path: 'mtb-admin',
    component: AdminComponent,
    canActivate:[AdminGuard],
    children: [
      {
        path: '',
        component: MainDashComponent
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: '',
            component: UsersTableComponent
          },
          {
            path: 'add',
            component: AddUserComponent
          },
          {
            path: ':user-id',
            component: UserDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  declarations: [],
  providers:[AdminGuard,LoginGuard]
})
export class AppRoutingModule { }
