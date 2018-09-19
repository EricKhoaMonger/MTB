import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { BannerComponent } from './front-page/banner/banner.component';
import { MovieCatComponent } from './front-page/movie-cat/movie-cat.component';
import { NewsCatComponent } from './front-page/news-cat/news-cat.component';
import { BannerItemComponent } from './front-page/banner/banner-item/banner-item.component';
import { NowshowingsComponent } from './front-page/movie-cat/nowshowings/nowshowings.component';
import { ComingsoonsComponent } from './front-page/movie-cat/comingsoons/comingsoons.component';
import { MovieItemComponent } from './front-page/movie-cat/movie-item/movie-item.component';
import { CarouselModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule, ModalModule, DropdownModule } from 'angular-bootstrap-md';
import { BreaksComponent } from './front-page/news-cat/breaks/breaks.component';
import { ReviewsComponent } from './front-page/news-cat/reviews/reviews.component';
import { DiscountsComponent } from './front-page/news-cat/discounts/discounts.component';
import { NewsItemComponent } from './front-page/news-cat/news-item/news-item.component';
import { FeaturedNewsComponent } from './front-page/news-cat/featured-news/featured-news.component';
import { ParallaxComponent } from './front-page/parallax/parallax.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoginSignupComponent } from './front-page/login-signup/login-signup.component';
import { RouterModule } from '@angular/router';
import { AlertsModule } from 'angular-alert-module';
import { SpinnerLoadingComponent } from './ui/spinner-loading/spinner-loading.component';
import { StarRatingComponent } from './ui/star-rating/star-rating.component';
import { BannerDetailComponent } from './movie-detail/banner-detail/banner-detail.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ScheduleDetailComponent } from './movie-detail/schedule-detail/schedule-detail.component';
import { ReviewDetailComponent } from './movie-detail/review-detail/review-detail.component';
import { PlotAndTrailerComponent } from './movie-detail/plot-and-trailer/plot-and-trailer.component';
import { PipeModule } from '../pipe/pipe.module';
import { StarRatedComponent } from './ui/star-rated/star-rated.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { SeatComponent } from './movie-booking/seats/seat/seat.component';
import { SeatsComponent } from './movie-booking/seats/seats.component';
import { CombosComponent } from './movie-booking/combos/combos.component';
import { ComboComponent } from './movie-booking/combos/combo/combo.component';
import { DrinksComponent } from './movie-booking/combos/drinks/drinks.component';
import { HolidaysComponent } from './movie-booking/combos/holidays/holidays.component';
import { PopcornsComponent } from './movie-booking/combos/popcorns/popcorns.component';
import { DoneBookingComponent } from './movie-booking/done-booking/done-booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    WavesModule.forRoot(),
    InputsModule.forRoot(),
    ModalModule.forRoot(),
    DropdownModule.forRoot(),
    ButtonsModule,
    CardsFreeModule,
    RouterModule,
    AlertsModule.forRoot(),
    NgxPageScrollModule,
    PipeModule
  ],
  declarations: [
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    FrontPageComponent,
    BannerComponent,
    MovieCatComponent,
    NewsCatComponent,
    BannerItemComponent,
    NowshowingsComponent,
    ComingsoonsComponent,
    MovieItemComponent,
    BreaksComponent,
    ReviewsComponent,
    DiscountsComponent,
    NewsItemComponent,
    FeaturedNewsComponent,
    ParallaxComponent,
    LoginComponent,
    SignupComponent,
    MovieDetailComponent,
    LoginSignupComponent, 
    SpinnerLoadingComponent, 
    StarRatingComponent, 
    BannerDetailComponent,
    ScheduleDetailComponent,
    ReviewDetailComponent,
    PlotAndTrailerComponent,
    StarRatedComponent,
    MovieBookingComponent,
    SeatComponent,
    SeatsComponent,
    CombosComponent,
    ComboComponent,
    DrinksComponent,
    HolidaysComponent,
    PopcornsComponent,
    DoneBookingComponent
  ],
  exports: [
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    FrontPageComponent,
    BannerComponent,
    MovieCatComponent,
    NewsCatComponent,
    BannerItemComponent,
    NowshowingsComponent,
    ComingsoonsComponent,
    MovieItemComponent,
    BreaksComponent,
    ReviewsComponent,
    DiscountsComponent,
    NewsItemComponent,
    FeaturedNewsComponent,
    ParallaxComponent,
    LoginComponent,
    SignupComponent,
    MovieDetailComponent,
    LoginSignupComponent, 
    SpinnerLoadingComponent, 
    StarRatingComponent, 
    BannerDetailComponent,
    ScheduleDetailComponent,
    ReviewDetailComponent,
    PlotAndTrailerComponent,
    StarRatedComponent,
    MovieBookingComponent,
    SeatComponent,
    SeatsComponent,
    CombosComponent,
    ComboComponent,
    DrinksComponent,
    HolidaysComponent,
    PopcornsComponent
  ]
})
export class HomeModule { }
