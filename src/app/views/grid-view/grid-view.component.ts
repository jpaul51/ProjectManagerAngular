import { Component, OnInit } from '@angular/core';
import { InternalStateService, State } from 'src/app/internalServices/internal-state-service.service';
// import '../theme/customTextField.js'

@Component({
  selector: 'grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.less']
})
export class GridViewComponent implements OnInit {

  ClickedRow: any;
  HighlightRow: Number = -1;
  Employee: any = [{ "name": "plop", "age": "25" }, { "name": "plopd", "age": "26" }];
  isAdd: boolean = false;
  columns: any;

  constructor(private internalService: InternalStateService) {
    this.ClickedRow = function (index) {
      this.HighlightRow = index;
    }
  }

  ngOnInit(): void {
    this.internalService.stateObservable().subscribe(next =>{
      if(next == State.LOAD){
        this.HighlightRow = -1;
      }
    })
  }


  clickRow(i: any): void {
    this.HighlightRow = i;
    this.internalService.currentState.next(State.EDIT);


  }
  clickAdd(): void {
    this.isAdd = true;
    this.internalService.currentState.next(State.ADD);
  }



}
