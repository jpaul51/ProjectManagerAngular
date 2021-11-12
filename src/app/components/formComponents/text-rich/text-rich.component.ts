import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'lpqft-text-rich',
  templateUrl: './text-rich.component.html',
  styleUrls: ['./text-rich.component.less']
})
export class TextRichComponent implements OnInit {
  
  public editor;

  constructor() { }

  public onReady( editor ) {

 
}

async test (){
  this.editor = ClassicEditor
  .create( document.querySelector( '#editor' ), {
      toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
      heading: {
          options: [
              { model: 'paragraph', title: 'Paragraphx', class: 'ck-heading_paragraph' },
              { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
          ]
      }
  } )
  .catch( error => {
      console.log( error );
  } );
  }

  ngAfterContentInit() : void{
    this.test();
  }

  ngOnInit(): void {

   

  }

}
