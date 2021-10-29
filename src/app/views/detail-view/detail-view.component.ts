import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InternalStateService, State, StateObject } from 'src/app/internalServices/internal-state-service.service';
import { TranslationServiceService } from 'src/app/services/translation-service.service';
import { Application } from '../model/application';
import { Detail } from '../model/detail';

@Component({
  selector: 'detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.less']
})
export class DetailViewComponent implements OnInit, OnChanges {

  @Input() id: string;
  @Input() app: Application;

  translatedEntityName: String;
  detail: Detail;

  constructor(private internalService: InternalStateService, private translationService: TranslationServiceService) { }

  ngOnInit(): void {
    this.translatedEntityName = this.translationService.translateKey(this.app.appEntityKey);
    this.detail = this.app.dlManager.defaultDetail;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.app)
    console.log(this.id)

    for (let propName in changes) {

      if (propName == "app" && this.app != null) {
        this.detail = this.app.dlManager.defaultDetail;
        this.translatedEntityName = this.app.appEntityKey;
      }
    }
  }


  clickSave(): void {
  }

  clickClose(): void {
    let stateObject = new StateObject(State.LOAD);
    this.internalService.currentState.next(stateObject);

  }

  clickDelete(): void {
  }

  translate(key: string) {
    return this.translationService.translateKey(key);
  }

}
