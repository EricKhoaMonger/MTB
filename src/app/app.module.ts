import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MovieDialogComponent } from './admin/admin/movies/movie-dialog/movie-dialog.component';
import { CreateMovieDialogComponent } from './admin/admin/movies/create-movie-dialog/create-movie-dialog.component';
import { AlertDialogComponent } from './admin/admin/alert-dialog/alert-dialog.component';
import { AdminGuard } from './services/admin.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AdminModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  entryComponents:[MovieDialogComponent,CreateMovieDialogComponent,AlertDialogComponent],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
