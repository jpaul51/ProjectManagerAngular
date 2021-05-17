import { Component, OnInit } from '@angular/core';
import { InternalStateService, State } from 'src/app/internalServices/internal-state-service.service';

@Component({
  selector: 'detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.less']
})
export class DetailViewComponent implements OnInit {

  constructor(private internalService : InternalStateService) { }

  ngOnInit(): void {
  }

  
  clickSave() : void{
  }

  clickClose() : void{
    this.internalService.currentState.next(State.LOAD);

  }

  clickDelete() : void{
  }


}
