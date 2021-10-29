import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less']
})
export class InputTextComponent implements OnInit {

  @Input() value: string;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
