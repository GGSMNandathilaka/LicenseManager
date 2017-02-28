import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {OrderHandlerService} from "./services/order-handler.service";
import {MaterialModule, MdToolbarModule, MdCardModule} from "@angular/material";
import {LicenseSearchModule} from "./components/license-search/license-search.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdToolbarModule,
    MdCardModule,
    LicenseSearchModule
  ],
  providers: [
    OrderHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
