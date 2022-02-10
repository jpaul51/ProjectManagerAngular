import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { DateFormatterService } from 'src/app/internalServices/date-formatter-service.service';
import { FIELD_TYPE } from 'src/app/views/model/field-detail';

@Component({
  selector: 'abstract-input',
  templateUrl: './abstract-input.component.html',
  styleUrls: ['./abstract-input.component.less']
})
export class AbstractInputComponent implements OnInit {

  constructor() { }

  @Input() label: string;
  @Input() value: string;
  @Input() fieldName: string;

  @Input() type: FIELD_TYPE;
  @Input() isReadOnly : boolean;

  @Input() entityDescriptor : string;

  FIELD_TYPE = FIELD_TYPE;

  ngOnInit(): void {
  }

}
