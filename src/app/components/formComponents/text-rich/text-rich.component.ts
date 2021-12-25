import { Component, OnInit } from '@angular/core';
import * as Editor from '../../../../ext/ckEditor';
import '../../../../ext/ckEditor/sample/styles.css';

@Component({
  selector: 'lpqft-text-rich',
  templateUrl: './text-rich.component.html',
  styleUrls: ['./text-rich.component.less']
})
export class TextRichComponent implements OnInit {

  public editor;

  constructor() { }

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
