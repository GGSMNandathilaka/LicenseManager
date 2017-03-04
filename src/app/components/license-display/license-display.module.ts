import {NgModule} from '@angular/core';
import {LicenseDisplayComponent} from "./license-display.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MaterialModule, MdCardModule, MdIconModule, MdChipsModule, MdInputModule,
  MdDialogModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {HelpDialogModule} from "./help-dialog/help-dialog.module";
import {HelpDialogComponent} from "./help-dialog/help-dialog.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    MdCardModule,
    FlexLayoutModule.forRoot(),
    RouterModule,
    MdIconModule,
    MdChipsModule,
    MdInputModule,
    MdDialogModule,
    HelpDialogModule
  ],
  exports: [LicenseDisplayComponent],
  declarations: [LicenseDisplayComponent],
  providers: [],
  entryComponents: [HelpDialogComponent]
})
export class LicenseDisplayModule {
}
