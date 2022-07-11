import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateFormatterService } from 'src/app/internalServices/date-formatter-service.service';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'lpqft-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent extends AbstractInputComponent implements OnInit, OnChanges {

  picker: any

  constructor(protected dateFormatterService: DateFormatterService) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.value = this.dateFormatterService.formatDateTimeForField(this.value);
  }

  ngOnInit(): void {

  }

}
