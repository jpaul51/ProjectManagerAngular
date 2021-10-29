import { Component, Input, OnInit } from '@angular/core';
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

  fieldType: FIELD_TYPE = FIELD_TYPE.SELECT;
  fieldTypeEnum: typeof FIELD_TYPE = FIELD_TYPE;

  ngOnInit(): void {
  }

}
