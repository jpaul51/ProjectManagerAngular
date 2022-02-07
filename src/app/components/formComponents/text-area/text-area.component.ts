import { Component, Input, OnInit } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'lpqft-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.less']
})
export class TextAreaComponent extends AbstractInputComponent implements OnInit {


  ngOnInit(): void {
  }

}
