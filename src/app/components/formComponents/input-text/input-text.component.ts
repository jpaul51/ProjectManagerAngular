import { Component, Input, OnInit } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less']
})
export class InputTextComponent extends AbstractInputComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
    console.log("input")
  }

}