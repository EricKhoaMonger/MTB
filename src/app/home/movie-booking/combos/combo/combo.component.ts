import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {
  @Output() comboEvent = new EventEmitter();
  @Input() combo: any
  quantity: number = 0;
  itemStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  AddItem() {
    this.itemStatus = true;
    this.quantity++;
    this.comboEvent.emit(this.itemStatus);
  }

  RemoveItem() {
    if (this.quantity > 0) {
      this.itemStatus = false;
      this.quantity--;
      this.comboEvent.emit(this.itemStatus);
    } else {
      alert("Can't do this")
    }
  }

}
