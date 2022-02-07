import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Editor from '../../../../ext/ckEditor';
import '../../../../ext/ckEditor/sample/styles.css';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';

@Component({
  selector: 'lpqft-text-rich',
  templateUrl: './text-rich.component.html',
  styleUrls: ['./text-rich.component.less']
})
export class TextRichComponent extends AbstractInputComponent implements OnInit, OnChanges {

  public editor;


  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (this.editor != null && propName == "value") {
        this.editor.setData(this.value);
      }
    }
  }

  public onReady(editor) {


  }

  async loadRichComponent() {
    Editor
      .create(document.querySelector('#editor'))
      .then(editor =>{
        this.editor = editor;
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngAfterContentInit(): void {
    this.loadRichComponent();
  }

  ngOnInit(): void {


  }

}
