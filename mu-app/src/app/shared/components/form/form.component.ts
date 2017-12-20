import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  /*newsItem: Item;*/
  state = State;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;
  @Output() dataItem:  EventEmitter<Item> = new EventEmitter();

  constructor(private _FormBuilder: FormBuilder) {
    this.nameCtrl = this._FormBuilder.control('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.refCtrl = this._FormBuilder.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.stateCtrl = this._FormBuilder.control(State.ALIVRER);
this.form = this._FormBuilder.group({
  name: this.nameCtrl,
  ref: this.refCtrl,
  state: this.stateCtrl
});


  }


  ngOnInit() {
    /*this.reset();*/
  }
  process(): void {
    /*this.dataItem.emit(this.newsItem);*/
    /*this.dataItem.emit(this.form.value);*/
    this.dataItem.emit({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.stateCtrl.value
    });
    this.reset();
  }
  reset() {
    this.form.reset();
    this.stateCtrl.setValue(State.ALIVRER);
    /*
    this.newsItem = {
      name: '',
      reference: '',
      state: State.ALIVRER
    };*/
  }
}
