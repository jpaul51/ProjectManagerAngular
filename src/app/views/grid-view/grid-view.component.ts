import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InternalStateService, State, StateObject } from 'src/app/internalServices/internal-state-service.service';
import { Application } from '../model/application';
import { ApplicationService } from 'src/app/services/application-service.service';
import { TranslationServiceService } from 'src/app/services/translation-service.service';

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


  constructor(private internalService: InternalStateService, private appService: ApplicationService, private translationService: TranslationServiceService) {
    this.ClickedRow = function (index) {
      this.HighlightRow = index;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {

    for (let propName in changes) {

      if (propName == "currentApp" && this.currentApp != null) {
        this.displayedColumnsName = this.currentApp.tlManager.defaultResultView.columns;
      }
      else if (propName == "data" && this.data != null) {
        console.log(this.displayedColumnsName)
        console.log(this.data.content)
        this.displayedData = this.data.content;
      }
    }

  }

  private getResultFields(app: Application): any[] {
    return app.allFields.filter(field => app.tlManager.defaultResultView.columns.includes(field.name));
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


  formatData(item) {
    if (typeof item === 'string' || item instanceof String || item == null) {
      return item;
    }
    else {
      return item.label;
    }

  }

}
