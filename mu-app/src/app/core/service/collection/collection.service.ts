import { Injectable } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { COLLECTION } from '../../../items/collection';

@Injectable()
export class CollectionService {
collection: Item[];
  constructor() {
  this.collection = this.getCollection();
    }
  // get collection
  getCollection() {
    return this.collection = COLLECTION;

  }

  // add item in collection
  addItem(item: Item) {
    this.collection.push(item);
  }
  // update collection
  update() {
  }
  // delete item in collection
  delete() {
  }
}
