import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderHandlerService} from "../../services/order-handler.service";
import {License} from "../../models/license";
import {MdDialog} from "@angular/material";
import {HelpDialogComponent} from "./help-dialog/help-dialog.component";

@Component({
  selector: 'app-license-display',
  templateUrl: './license-display.component.html',
  styleUrls: ['./license-display.component.css']
})
export class LicenseDisplayComponent implements OnInit {

  result: any;
  license: any = new Array<License>();
  searchResult: License;

  constructor(private router: ActivatedRoute,
              private orderHandler: OrderHandlerService,
              public dialog: MdDialog) {
  }

  ngOnInit() {
    this.result = this.router.params.subscribe(params => {
      let result = params['id'];
      console.log('router-result:', result);
      this.orderHandler.getOrders().subscribe(data => {
        this.license = data;
        for (let i = 0; i < this.license.length; i++) {
          if (this.license[i].id === result) {
            this.searchResult = this.license[i];
          }
        }
        console.log('router-search-result:', this.searchResult);
      })
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(HelpDialogComponent);
  }

}
