import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ItemComponent, ListItemsComponent, AddComponent],
  exports: [ItemComponent, ListItemsComponent, AddComponent]
})
export class ItemsModule { }
