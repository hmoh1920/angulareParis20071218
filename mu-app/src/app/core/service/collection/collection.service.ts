import { Injectable } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { COLLECTION } from '../../../items/collection';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { State } from '../../../shared/enums/state.enum';
import { ItemId } from '../../../shared/interfaces/item-id.model';

@Injectable()
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  collection: Observable<ItemId[]>;

      constructor(private afs: AngularFirestore) {
          this.getCollection();
          this.collection.subscribe(data => console.log(data));
        }
    // get collection
    getCollection() {
      this.itemsCollection = this.afs.collection<Item>('collection');
      return this.collection = this.itemsCollection.snapshotChanges().map(document => {
        return document.map(prop => {
          const data = prop.payload.doc.data() as Item;
          const id = prop.payload.doc.id;
          return { id, ...data };
        });
      });

      // return this.collection = COLLECTION;

    }

  // add item in collection
  addItem(item: Item) {
    // this.collection.push(item);
  }
  // update collection
  update(item: ItemId, newState: State) {
    item.state = newState;
    this.afs.doc<Item>(`collection/${item.id}`);
  }
  // delete item in collection
  delete() {
  }
}
