import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InternalStateService, State, StateObject } from 'src/app/internalServices/internal-state-service.service';
import { Application } from '../model/application';
import { ApplicationService } from 'src/app/services/application-service.service';
import { TranslationServiceService } from 'src/app/services/translation-service.service';
import { FIELD_TYPE } from '../model/field-detail';
import {ResultView} from '../result-view';
import { DateFormatterService } from 'src/app/internalServices/date-formatter-service.service';

@Component({
  selector: 'grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.less']
})
export class GridViewComponent implements OnInit, OnChanges {

  ClickedRow: any;
  HighlightRow: Number = -1;
  isAdd: boolean = false;
  columns: any = [];
  appList: Application[] = Array();
  @Input() data: any = [];
  @Input() currentApp: Application;

  displayedData: any = [];
  displayedColumnsName = [];
  resultView : ResultView;


  constructor(private internalService: InternalStateService, private appService: ApplicationService, private translationService: TranslationServiceService,
    private dateFormatterService : DateFormatterService) {
    this.ClickedRow = function (index) {
      this.HighlightRow = index;
    }
  }

  ngOnInit(): void {
    this.internalService.stateObservable().subscribe(next => {
      if (next.state == State.LOAD) {
        this.HighlightRow = -1;
      }
    })

    this.internalService.currentApp.subscribe(app => {

      if (app != null) {

        var cols = this.getResultFields(app);
        if (cols.length == 0) {
          cols = app.allFields;
        }
        this.columns.length = 0;
        cols.forEach(col => {
          this.columns.push(this.translationService.translateKey(col.translationKey));
        })
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

    for (let propName in changes) {

      if (propName == "currentApp" && this.currentApp != null) {
        this.resultView =  this.currentApp.tlManager.defaultResultView;
        this.displayedColumnsName = this.resultView.columns;
      }
      else if (propName == "data" && this.data != null) {
        this.displayedData = this.data.content;
      }
    }

  }

  private getResultFields(app: Application): any[] {
    return app.allFields.filter(field => app.tlManager.defaultResultView.columns.includes(field.name));
  }




  clickRow(i: number): void {
    this.HighlightRow = i;
    let stateObject = new StateObject(State.EDIT, this.displayedData[i].id);
    this.internalService.currentState.next(stateObject);
  }
  clickAdd(): void {
    this.isAdd = true;
    let stateObject = new StateObject(State.ADD);
    this.internalService.currentState.next(stateObject);
  }


  formatData(item : any, col : string) {
    if(this.currentApp != null){
      if (typeof item === 'string' || item instanceof String || item == null) {

        const modifiedField = this.currentApp.allFields.filter(field => field.name == col);
        if(modifiedField != null && modifiedField.length > 0){
          let field = modifiedField[0];

          if(field.type.toString() === FIELD_TYPE[FIELD_TYPE.DATE_TIME].toString()){
            item = this.dateFormatterService.formatDateTime(item);
          }

          return item;
        }
      }
      else {
        return item.label;
      }
    }

  }

}
