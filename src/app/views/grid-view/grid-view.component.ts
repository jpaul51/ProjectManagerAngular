import { Component, OnInit } from '@angular/core';
import { InternalStateService, State } from 'src/app/internalServices/internal-state-service.service';
import { Application } from '../model/application';
import { ApplicationService } from 'src/app/services/application-service.service';
import { TranslationServiceService } from 'src/app/services/translation-service.service';
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
  columns: any = [];
  appList: Application[] = Array();

  constructor(private internalService: InternalStateService, private appService : ApplicationService, private translationService : TranslationServiceService) {
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

    this.internalService.getCurrentApp().subscribe(app =>{

      if(app != null){

        var cols =  app.tlManager.defaultResultView.columns;
        if(cols.length == 0){
          cols = app.allFields;
        }
        this.columns.length = 0;
        cols.forEach(col =>{
          this.columns.push(this.translationService.translateKey(col.translationKey));
        })
      }
    });

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
