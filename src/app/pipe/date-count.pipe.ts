import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  constructor() { }

  transform(date: any): any {
    return moment(date).fromNow();
  }

}
