import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { StateDirective } from './directives/state/state.directive';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [
    MenuComponent,
    StateDirective,
    FormComponent
  ],
  exports: [MenuComponent, StateDirective, FormComponent]
})
export class SharedModule { }
