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
  currentData : any;

  constructor(private internalService: InternalStateService, private appService: ApplicationService) { 
    console.log("construct splitview");
  }

  ngOnInit(): void {
    console.log("init splitview");
    this.currentState = this.internalService.stateObservable();
    this.currentState.subscribe(next => {
      this.isEditoropened = (next == State.ADD || next == State.EDIT);
    })

    console.log( this.internalService.currentRoute)

    //Route change
     this.subscribers.route = this.internalService.currentRoute.subscribe((next : string) => {
      this.loadApp(next);
    });

    //App change
    this.subscribers.app =this.internalService.getCurrentApp().pipe(take(1)).subscribe(currentApp =>{
      this.loadData(currentApp);
    });

  }


  private loadApp(next: string) {
    console.log("load app: " + next);
    let apps = this.appService.apps.getValue();
    apps.forEach(app => {

      if (app.appPathLoc != null && next.endsWith(app.appPathLoc)) {
        console.log("update app");
        //trigger app change
        this.internalService.setCurrentApp(app);

      }
    });
  }

  private loadData(currentApp: Application) {
    console.log("app subscription");
    let dataPromise = this.appService.getPage(currentApp.mainEntity + "Descriptor");
    dataPromise.then(data => {
      console.log("update data");
      console.log(currentApp);
      this.currentData = data;
    });
  }
}