import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../collection';
import { CollectionService } from '../../../core/service/collection/collection.service';
import { Item } from '../../../shared/interfaces/item.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

    @Component({
      selector: 'app-add',
      templateUrl: './add.component.html',
      styleUrls: ['./add.component.scss']
    })
    export class AddComponent implements OnInit {
      collection: Observable<Item[]>;
      constructor(private _CollectionService: CollectionService, private _Router: Router) { }

      ngOnInit() {
        this.collection = this._CollectionService.collection;
      }
      addItem(item: Item): void {
        console.log(item);
        // this.collection.push(item);
        this._CollectionService.addItem(item);
        this._Router.navigate(['/list']);
      }
    }
