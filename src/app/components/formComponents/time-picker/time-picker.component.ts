import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateFormatterService } from 'src/app/internalServices/date-formatter-service.service';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { I18n } from './i18n';

@Component({
  selector: 'lpqft-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.less']
})
export class TimePickerComponent extends AbstractInputComponent implements OnInit, OnChanges {
  
  options = new I18n();

  constructor(private dateFormatterService : DateFormatterService){
    super(); 

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.value = this.dateFormatterService.formatTime(this.value);

  }

  ngOnInit(): void {
  }

}
