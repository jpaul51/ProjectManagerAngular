import { Component, Inject, LOCALE_ID, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { takeUntil } from 'rxjs/operators';
import { ApplicationService } from 'src/app/services/application-service.service';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { Item } from './item';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less']
})
export class InputSelectComponent extends AbstractInputComponent implements OnInit, OnDestroy {

  selectItems: Item[];

  filteredItems: ReplaySubject<Item[]> = new ReplaySubject<Item[]>();

  /** control for the selected bank */
  public bankCtrl: UntypedFormControl = new UntypedFormControl();

  /** control for the MatSelect filter keyword */
  public bankFilterCtrl: UntypedFormControl = new UntypedFormControl();

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;


  constructor(private appService: ApplicationService) {
    super();
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }


  ngOnInit(): void {

    if (this.entityDescriptor != null) {
      let dataPromise = this.appService.getPage(this.entityDescriptor, "", 0, 300);
      dataPromise.then(apiData => {
        this.selectItems = Array();
        apiData["content"].forEach(element => {
          let item = new Item();
          item.value = element.id;
          item.label = element.label;
          this.selectItems.push(item);
        });
        // load the initial bank list
        this.filteredItems.next(this.selectItems.slice());
      });



      //   // listen for search field value changes
      this.bankFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterItems();
        });
    }

  }

  protected filterItems() {
    if (!this.selectItems) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    console.log(search)
    if (!search) {
      this.filteredItems.next(this.selectItems.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredItems.next(
      this.selectItems.filter(item => item.label.toLowerCase().indexOf(search) > -1)
    );
  }

}
