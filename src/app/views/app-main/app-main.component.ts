import { Component, OnInit, Type } from '@angular/core';
import { AppLayoutElement } from '@vaadin/vaadin-app-layout'
import { TabsElement } from '@vaadin/vaadin-tabs'
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-app-layout/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs'
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tab'
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tab-styles'
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs-styles'
import '@vaadin/vaadin-split-layout'
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/vaadin-integer-field.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-login/vaadin-login-overlay.js';


// Import the <custom-style> element from Polymer and include
// the style sheets in the global scope
import '@polymer/polymer/lib/elements/custom-style.js';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application-service.service';
import { Application } from 'src/app/views/model/application';
import { TabComponent } from '../tab/tab.component';
import { TranslationServiceService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.less']
})
export class AppMainComponent implements OnInit {

  showSplitView = false;

  appList: Application[];

  constructor(private appService: ApplicationService, private router: Router, private translationService : TranslationServiceService) { }

  ngOnInit(): void {


    this.appService.currentRoute.subscribe(currentRoute => {
      if (currentRoute === "/home") {
        this.showSplitView = false;
      } else {
        this.showSplitView = true;
      }
    })

    const token = localStorage.getItem("token");
    console.log("TOK: " + token)
    if (typeof token == 'undefined' || token == null) {
      console.log("login")
      this.appService.login();
    }
    else {
      console.log("app list")

      this.appService.appConfigList();

      this.buildRoutes();

    }

  }




  private buildRoutes() {
    console.log("build routes")
    this.appService.apps.subscribe(next => {
      this.appList = next;
      console.log(next);
      var pathConfig: Array<Object> = new Array();

      this.appList.forEach(app => {
        let item = new PathConfig();
        if (typeof app.appPathLoc !== 'undefined' && app.appPathLoc != null && app.appPathLoc.length > 0) {
          item.path = app.appPathLoc;
          item.component = AppMainComponent;
          pathConfig.push(item);
        }
      });

      let homeRoute = new PathConfig();
      homeRoute.path = "home";
      homeRoute.component = TabComponent;
      pathConfig.push(homeRoute);

      
      this.router.resetConfig(pathConfig);

    });
  }
}
class PathConfig {
  path: string
  component: Type<any>
}