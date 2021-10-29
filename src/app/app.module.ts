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
    InputSelectComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule



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
