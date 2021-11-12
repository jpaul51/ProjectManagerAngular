import { Component, Input, OnInit } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { I18n } from './i18n';

@Component({
  selector: 'lpqft-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.less']
})
export class DateTimePickerComponent extends AbstractInputComponent implements OnInit {
  
  options = new I18n();

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
