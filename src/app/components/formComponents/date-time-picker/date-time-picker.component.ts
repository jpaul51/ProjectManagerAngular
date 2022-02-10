import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateFormatterService } from 'src/app/internalServices/date-formatter-service.service';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'lpqft-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.less']
})
export class DateTimePickerComponent  extends AbstractInputComponent implements OnInit, OnChanges { 

  picker : any

  constructor(protected dateFormatterService : DateFormatterService){
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.value = this.dateFormatterService.formatDateTimeForField(this.value);
  }

  ngOnInit(): void {
  }

}
