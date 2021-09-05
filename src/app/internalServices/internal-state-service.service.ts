import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Application } from '../views/model/application';


@Injectable({
  providedIn: 'root'
})
export class InternalStateService {

  currentState: BehaviorSubject<State> 

  currentApp: Subject<Application> = new Subject

  currentRoute = new Subject<string>();

  constructor() {
    this.currentState = new BehaviorSubject(State.LOAD);
    this.currentState.next( State.LOAD)

   }

  stateObservable() {
    
    return this.currentState.asObservable();
  }

  setCurrentApp(app : Application ){
    console.log("Set next app")
    this.currentApp.next(app);
  }
  getCurrentApp(){
    return this.currentApp;
  }
  
}


export enum State {
  ADD = "Add",
  EDIT = "Edit",
  LOAD = "Load",
}
