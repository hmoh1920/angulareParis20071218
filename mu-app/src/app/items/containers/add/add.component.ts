import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../collection';
import { CollectionService } from '../../../core/service/collection/collection.service';
import { Item } from '../../../shared/interfaces/item.model';

    @Component({
      selector: 'app-add',
      templateUrl: './add.component.html',
      styleUrls: ['./add.component.scss']
    })
    export class AddComponent implements OnInit {
      collection: Item[];
      constructor(private _CollectionService: CollectionService) { }

      ngOnInit() {
        this.collection = this._CollectionService.collection;
      }
      addItem(item: Item): void {
        console.log(item);
        // this.collection.push(item);
        this._CollectionService.addItem(item);
      }
    }
