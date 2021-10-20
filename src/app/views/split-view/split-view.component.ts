import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Application } from '../model/application';
import { ApplicationService } from 'src/app/services/application-service.service';
import { InternalStateService, State } from '../../internalServices/internal-state-service.service'
import { DestroySubscribers } from '../decorators/destroySubscribers.decorator';
import { take } from 'rxjs/operators';

@Component({
  selector: 'split-view',
  templateUrl: './split-view.component.html',
  styleUrls: ['./split-view.component.less']
})
@DestroySubscribers()
export class SplitViewComponent implements OnInit {

  public subscribers: any = {};

  currentState: Observable<State>

  isEditoropened: boolean = false;

  appConfigList: Application[]
  currentData: any;
  currentApp: Application;

  constructor(private internalService: InternalStateService, private appService: ApplicationService) {

    this.subscribers.route = this.internalService.currentRoute.subscribe((next: string) => {
      this.currentApp = this.loadApp(next);

      if (this.currentApp != null) {
        this.loadData(this.currentApp);
      }
    });

  }

  ngOnInit(): void {
    this.currentState = this.internalService.stateObservable();
    this.currentState.subscribe(next => {
      this.isEditoropened = (next == State.ADD || next == State.EDIT);
    })

  }


  private loadApp(next: string): Application {
    let apps = this.appService.apps.getValue();
    let currentApp: Application;
    apps.forEach(app => {

      if (app.appPathLoc != null && next.endsWith(app.appPathLoc)) {
        //trigger app change
        this.internalService.setCurrentApp(app);
        currentApp = app;
      }
    });
    return currentApp;
  }

  private loadData(currentApp: Application) {
    let dataPromise = this.appService.getPage(currentApp.mainEntity + "Descriptor");
    dataPromise.then(data => {
      this.currentData = data;
    });
  }
}