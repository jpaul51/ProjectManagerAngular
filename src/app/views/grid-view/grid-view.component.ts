import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InternalStateService, State } from 'src/app/internalServices/internal-state-service.service';
import { Application } from '../model/application';
import { ApplicationService } from 'src/app/services/application-service.service';
import { TranslationServiceService } from 'src/app/services/translation-service.service';
import { take } from 'rxjs/operators';
import { Subscriber } from 'rxjs';
// import '../theme/customTextField.js'

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
        this.displayedData = this.data.content;
      }
    }
  }

  private getResultFields(app: Application): any[] {
    return app.allFields.filter(field => app.tlManager.defaultResultView.columns.includes(field.name));
  }

  ngOnInit(): void {
    this.internalService.stateObservable().subscribe(next => {
      if (next == State.LOAD) {
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


  clickRow(i: any): void {
    this.HighlightRow = i;
    this.internalService.currentState.next(State.EDIT);


  }
  clickAdd(): void {
    this.isAdd = true;
    this.internalService.currentState.next(State.ADD);
  }


  formatData(item) {
    if (typeof item === 'string' || item instanceof String) {
      return item;
    }
    else {
      return item.label;
    }

  }

}
