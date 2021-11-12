import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { DateTimePickerComponent } from './components/formComponents/date-time-picker/date-time-picker.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextRichComponent } from './components/formComponents/text-rich/text-rich.component';


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
    DateTimePickerComponent,
    
    TextRichComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CKEditorModule



  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
