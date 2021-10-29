import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Application } from '../views/model/application';


@Injectable({
  providedIn: 'root'
})
export class InternalStateService {

  currentState: BehaviorSubject<StateObject>

  currentApp: Subject<Application> = new Subject

  currentRoute = new Subject<string>();

  constructor() {
    let state = new StateObject(State.LOAD);
    this.currentState = new BehaviorSubject(state);
    this.currentState.next(state);
  }

  stateObservable() {

    return this.currentState.asObservable();
  }

  setCurrentApp(app: Application) {
    this.currentApp.next(app);
  }
  getCurrentApp() {
    return this.currentApp.toPromise();
  }

  getCurrentRoute() {
    return this.currentRoute.toPromise();
  }

}

export class StateObject {
  id: string;
  state: State;

  constructor(state: State, id?: string) {
    this.state = state;
    this.id = id;
  }
}


export enum State {
  ADD = "Add",
  EDIT = "Edit",
  LOAD = "Load",
}
