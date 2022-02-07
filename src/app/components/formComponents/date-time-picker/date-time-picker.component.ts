import { DatePipe } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'lpqft-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.less']
})
export class DateTimePickerComponent  extends AbstractInputComponent implements OnInit, OnChanges { 

  ngOnChanges(changes: SimpleChanges): void {
   console.log("change dateTime");
  //  this.locale = "fr-FR";
   const datepipe: DatePipe = new DatePipe(this.locale)
   let formattedDate = datepipe.transform(this.value, "YYYY-MM-dd'T'HH:mm:ss")
   console.log(formattedDate);
   this.value = formattedDate
  }

  ngOnInit(): void {
  }

}
