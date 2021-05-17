import { Component, OnInit } from '@angular/core';
import {AppLayoutElement} from '@vaadin/vaadin-app-layout'
import {TabsElement} from '@vaadin/vaadin-tabs'
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

// Import the <custom-style> element from Polymer and include
// the style sheets in the global scope
import '@polymer/polymer/lib/elements/custom-style.js';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.less']
})
export class AppMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
