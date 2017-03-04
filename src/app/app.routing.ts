import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {LicenseDisplayComponent} from "./components/license-display/license-display.component";
import {LicenseSearchComponent} from "./components/license-search/license-search.component";

export const routes: Routes = [
  {path: '', component: LicenseSearchComponent},
  {path: 'search-result/:id', component: LicenseDisplayComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
