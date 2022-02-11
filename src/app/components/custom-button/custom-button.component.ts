import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lpqft-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.less']
})
export class CustomButtonComponent implements OnInit {

  @Input() buttonLabel;
  @Input() theme = "secondary"
  @Output() clickEmitter  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  performClick(){
    this.clickEmitter.emit();
  }

}
