import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'lpqft-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent extends AbstractInputComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
   console.log("change DatePicker")
  }

  ngOnInit(): void {

  }

}
