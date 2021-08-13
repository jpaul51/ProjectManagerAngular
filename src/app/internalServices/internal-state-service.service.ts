import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Application } from '../views/model/application';


@Injectable({
  providedIn: 'root'
})
export class InternalStateService {

  currentState: Subject<State> 

  currentApp: Application

  constructor() {
    this.currentState = new Subject();
   this.currentState.next( State.LOAD)

   }

  stateObservable() {
    
    return this.currentState.asObservable();
  }

}


export enum State {
  ADD = "Add",
  EDIT = "Edit",
  LOAD = "Load",
}
