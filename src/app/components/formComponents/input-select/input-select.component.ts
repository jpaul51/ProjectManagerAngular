import { Component,  Inject,  LOCALE_ID,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { ApplicationService } from 'src/app/services/application-service.service';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { Item } from './item';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less']
})
export class InputSelectComponent extends AbstractInputComponent implements OnInit {
  
  selectItems : Item[];

  constructor(private appService: ApplicationService) {
    super();
   }


  ngOnInit(): void {
    if(this.entityDescriptor != null){
      let dataPromise = this.appService.getPage(this.entityDescriptor, "", 0, 300);
      dataPromise.then(apiData=>{
      this.selectItems = Array();
      apiData["content"].forEach(element => {
        let item = new Item();
        item.value = element.id;
        item.label = element.label;
        this.selectItems.push(item);
      });

      });
  }

  }

}
