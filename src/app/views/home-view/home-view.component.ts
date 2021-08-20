import { Component, OnInit } from '@angular/core';
import { InternalStateService } from 'src/app/internalServices/internal-state-service.service';
import { ApplicationService } from 'src/app/services/application-service.service';

@Component({
  selector: 'home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.less']
})
export class HomeViewComponent implements OnInit {

  constructor(private internalService: InternalStateService, private appService: ApplicationService) { }

  ngOnInit(): void {
  }

  load() {

    this.internalService.apps = this.appService.appConfigList();
  }

}
