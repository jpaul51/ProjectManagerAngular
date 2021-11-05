import { Component, Input, OnInit } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less']
})
export class InputSelectComponent extends AbstractInputComponent implements OnInit {
  
  constructor() {
    super();
   }

  ngOnInit(): void {
    console.log("combo");
  }

}
