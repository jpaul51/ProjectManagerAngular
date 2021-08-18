import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../model/application';
import { ApplicationService } from 'src/app/services/application-service.service';
import { InternalStateService, State } from '../../internalServices/internal-state-service.service'
import { GridViewComponent } from '../grid-view/grid-view.component'
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'split-view',
  templateUrl: './split-view.component.html',
  styleUrls: ['./split-view.component.less']
})
export class SplitViewComponent implements OnInit {

  currentState: Observable<State>

  isEditoropened: boolean = false;

  appConfigList: Application[]

  constructor(private internalService: InternalStateService, private appService: ApplicationService) { 


  }

  ngOnInit(): void {
    this.currentState = this.internalService.stateObservable();
    this.currentState.subscribe(next => {
      this.isEditoropened = (next == State.ADD || next == State.EDIT);
    })
    this.internalService.currentRoute.subscribe((next : string) => {
      console.log("change route: "+next)
      let apps  = this.appService.apps.getValue()
      apps.forEach(app =>{

        if(app.appPathLoc != null && next.endsWith(app.appPathLoc) ){
          this.internalService.setCurrentApp(app)
        }
        
      })
    });
  }



}
