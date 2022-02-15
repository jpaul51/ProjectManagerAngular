import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMainComponent } from './views/app-main/app-main.component';


import { TabComponent } from './components/tab/tab.component'
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './views/grid-view/grid-view.component';
import { SplitViewComponent } from './views/split-view/split-view.component';
import { DetailViewComponent } from './views/detail-view/detail-view.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { InputTextComponent } from './components/formComponents/input-text/input-text.component';
import { AbstractInputComponent } from './components/formComponents/abstract-input/abstract-input.component';
import { InputSelectComponent } from './components/formComponents/input-select/input-select.component';
import { TextAreaComponent } from './components/formComponents/text-area/text-area.component';
import { DatePickerComponent } from './components/formComponents/date-picker/date-picker.component';
import { TimePickerComponent } from './components/formComponents/time-picker/time-picker.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextRichComponent } from './components/formComponents/text-rich/text-rich.component';
import { DateTimePickerComponent } from './components/formComponents/date-time-picker/date-time-picker.component';

import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeFr);

const routes: Routes = [
  { path: 'home', component: TabComponent },
  { path: 'project', component: AppMainComponent },
  { path: 'interventions', component: AppMainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    TabComponent,
    GridViewComponent,
    SplitViewComponent,
    DetailViewComponent,
    LoginComponent,
    HomeViewComponent,
    InputTextComponent,
    AbstractInputComponent,
    InputSelectComponent,
    TextAreaComponent,
    DatePickerComponent,
    TimePickerComponent,

    TextRichComponent,
    DateTimePickerComponent,
    CustomButtonComponent,
    ReactiveFormsModule


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CKEditorModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    BrowserAnimationsModule,
    NgxMatNativeDateModule



  ],
  exports: [
    RouterModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' },
  {
    provide: MAT_DATE_FORMATS,
    useValue: {
      parse: {
        dateInput: "YYYY-MM-DD'T'HH:mm:ss'Z'",
      },
      display: {
        dateInput: 'DD-MM-YYYY HH:mm',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'DD-MM-YYYY HH:mm',
        monthYearA11yLabel: 'MMMM YYYY'
      }
    }
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
