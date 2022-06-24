import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
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
  @Input() value: any;
  @Input() fieldName: string;

  @Input() type: FIELD_TYPE;
  @Input() isReadOnly: boolean;

  @Input() entityDescriptor: string;

  @Input() form: UntypedFormGroup;

  FIELD_TYPE = FIELD_TYPE;

  ngOnInit(): void {
    console.log(this.form)
  }

  getValueId(): string {
    if (this.value != null) {
      return this.value.id;
    } else {
      return "";
    }
  }

}
