import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breaks',
  templateUrl: './breaks.component.html',
  styleUrls: ['./breaks.component.scss']
})
export class BreaksComponent implements OnInit {
  @Input() breaksList:any;
  constructor() { }

  ngOnInit() {
  }

}
