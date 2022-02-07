import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { I18n } from './i18n';

@Component({
  selector: 'lpqft-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.less']
})
export class TimePickerComponent extends AbstractInputComponent implements OnInit, OnChanges {
  
  options = new I18n();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change dateTime")
    console.log(this.value)
  }

  ngOnInit(): void {
  }

}
