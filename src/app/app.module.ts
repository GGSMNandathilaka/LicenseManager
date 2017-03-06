import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {OrderHandlerService} from "./services/order-handler.service";
import {MaterialModule, MdToolbarModule, MdCardModule} from "@angular/material";
import {LicenseSearchModule} from "./components/license-search/license-search.module";
import {routing} from "./app.routing";
import {LicenseDisplayModule} from "./components/license-display/license-display.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdToolbarModule,
    MdCardModule,
    LicenseSearchModule,
    LicenseDisplayModule,
    routing,
    FlexLayoutModule.forRoot(),
    RouterModule
  ],
  providers: [
    OrderHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
