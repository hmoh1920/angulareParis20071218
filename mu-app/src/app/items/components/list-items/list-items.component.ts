import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../../../core/service/collection/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

}
