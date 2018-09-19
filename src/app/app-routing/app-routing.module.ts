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

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'login',
    component: LoginSignupComponent,
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
    path:'movie-detail/:id',
    component:MovieDetailComponent
  },
  {
    path:'booking/:schedule_id',
    component:MovieBookingComponent,
    canActivate:[BookingGuardService]
  },
  {
    path:'done/:schedule_id',
    component:DoneBookingComponent
  },
  {
    path: '**',
    redirectTo:'',
    pathMatch:'full'
  }


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  declarations: []
})
export class AppRoutingModule { }
