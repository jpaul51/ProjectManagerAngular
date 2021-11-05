import { Component, Input, OnInit } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'lpqft-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent extends AbstractInputComponent implements OnInit {

  constructor() {
    super();

   }

  ngOnInit(): void {
    console.log("test: "+this.readOnly)

  }

}
