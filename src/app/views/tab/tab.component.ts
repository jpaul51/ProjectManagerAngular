import { Component, Input, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { ApplicationService } from 'src/app/services/application-service.service';

@Component({
  selector: 'tab-component',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {

  @Input ()route: string;
  @Input ()name: string;

  selected : boolean = false

  constructor(private router: Router, private appService : ApplicationService) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          appService.currentRoute.next(event.url);
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.selected = (event.urlAfterRedirects === this.route)
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
  });


  }

  onclick() : void{
    this.router.navigateByUrl(this.route)
  }

  ngOnInit(): void {


  }

}
