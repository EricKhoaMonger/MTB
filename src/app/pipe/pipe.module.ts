import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SafePipe, DateCountPipe],
  exports: [SafePipe, DateCountPipe]
})
export class PipeModule { }
