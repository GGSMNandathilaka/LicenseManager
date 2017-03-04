import {NgModule} from '@angular/core';
import {LicenseSearchComponent} from "./license-search.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {
  MaterialModule, MdCardModule, MdAutocompleteModule, MdGridListModule, MdChipsModule,
  MdIconModule
} from "@angular/material";
import {OrderHandlerService} from "../../services/order-handler.service";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    MdCardModule,
    FlexLayoutModule.forRoot(),
    MdAutocompleteModule,
    MdGridListModule,
    MdChipsModule,
    MdIconModule
  ],
  exports: [LicenseSearchComponent],
  declarations: [LicenseSearchComponent],
  providers: [
    OrderHandlerService
  ],
})
export class LicenseSearchModule {
}
