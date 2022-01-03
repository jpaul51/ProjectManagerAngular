import { Component, OnInit } from '@angular/core';
import * as Editor from '../../../../ext/ckEditor';
import '../../../../ext/ckEditor/sample/styles.css';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'lpqft-text-rich',
  templateUrl: './text-rich.component.html',
  styleUrls: ['./text-rich.component.less']
})
export class TextRichComponent extends AbstractInputComponent implements OnInit {

  public editor;

  constructor() {
    super();
  }

  public onReady(editor) {


  }

  async test() {
    this.editor = Editor
      .create(document.querySelector('#editor'))
      .catch(error => {
        console.log(error);
      });
  }

  ngAfterContentInit(): void {
    this.test();
  }

  ngOnInit(): void {


  }

}
