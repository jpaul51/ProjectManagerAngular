import { DatePipe } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  formatDateTimeForField(isoDate : string){
    const datepipe: DatePipe = new DatePipe(this.locale)
    return datepipe.transform(isoDate, "YYYY-MM-dd'T'HH:mm:ss")
  }

  formatDateTime(isoDate : string){
    const datepipe: DatePipe = new DatePipe(this.locale)
    return datepipe.transform(isoDate, "dd-MM-YYYY HH:mm")
  }

}
