import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less']
})
export class InputSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("combo");
  }

}
