import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  newsItem: Item;
  state = State;
  @Output() dataItem:  EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.reset();
  }
  process() {
    this.dataItem.emit(this.newsItem);
    this.reset();
  }
  reset() {
    this.newsItem = {
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }
}
