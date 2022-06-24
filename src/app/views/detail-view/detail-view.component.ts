import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';
import { InternalStateService, State, StateObject } from 'src/app/internalServices/internal-state-service.service';
import { ApplicationService } from 'src/app/services/application-service.service';
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
  oneEntityFetchedData: any = {};
  public detailForm: UntypedFormGroup = this.fb.group({});


  constructor(private internalService: InternalStateService, private translationService: TranslationServiceService,
    private appService: ApplicationService, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.translatedEntityName = this.translationService.translateKey(this.app.appEntityKey);
    this.detail = this.app.dlManager.defaultDetail;

    this.detailForm.addControl("test", this.fb.control(""));

    this.app.allFields.forEach(field => {
      const name = field.name;
      console.log("add control " + name);
      this.detailForm.addControl(name, this.fb.control(this.oneEntityFetchedData[field.name]));
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {

      if (propName == "app" && this.app != null) {
        this.detail = this.app.dlManager.defaultDetail;
        this.translatedEntityName = this.app.appEntityKey;
      }

      if (propName == "id" && this.id != null) {
        this.appService.getOne(this.app.mainEntity, this.id).then(oneEntityFetchedData => {
          this.oneEntityFetchedData = oneEntityFetchedData.entity
        });
      }
    }
  }


  clickSave(): void {
    console.log(this.detailForm.value)
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
