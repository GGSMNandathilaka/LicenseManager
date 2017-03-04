import {NgModule} from '@angular/core';
import {HelpDialogComponent} from "./help-dialog.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {MaterialModule, MdDialogModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    MdDialogModule
  ],
  exports: [HelpDialogComponent],
  declarations: [HelpDialogComponent],
  providers: [],
})
export class HelpDialogModule {
}
