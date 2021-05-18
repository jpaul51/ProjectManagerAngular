import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMainComponent } from './views/app-main/app-main.component';


import { TabComponent } from './views/tab/tab.component'
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './views/grid-view/grid-view.component';
import { SplitViewComponent } from './views/split-view/split-view.component';
import { DetailViewComponent } from './views/detail-view/detail-view.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


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
    LoginComponent
    
    
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
