import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../collection';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  collection: Item[];
  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }
  addItem(item: Item): void {
    console.log(item);
    this.collection.push(item);
  }
}