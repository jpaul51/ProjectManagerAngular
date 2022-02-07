import { Component,  Inject,  LOCALE_ID,  OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application-service.service';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { Item } from './item';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less']
})
export class InputSelectComponent extends AbstractInputComponent implements OnInit {
  
  data : Item[];

  constructor(@Inject(LOCALE_ID) public locale: string, private appService: ApplicationService) {
    super(locale);
   }

  ngOnInit(): void {
    let dataPromise = this.appService.getPage(this.entityDescriptor, "", 0, 300);
    dataPromise.then(apiData=>{
    this.data = Array();
     apiData["content"].forEach(element => {
       let item = new Item();
       item.value = element.id;
       item.label = element.label;
       this.data.push(item);
     });
    });

  }

}
