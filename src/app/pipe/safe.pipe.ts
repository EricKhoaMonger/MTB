import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private domSanz:DomSanitizer) {

  }

  transform(url: string): any {
    return this.domSanz.bypassSecurityTrustResourceUrl(url);
  }

}
