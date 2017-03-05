import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderHandlerService} from "../../services/order-handler.service";
import {License} from "../../models/license";
import {MdDialog} from "@angular/material";
import {HelpDialogComponent} from "./help-dialog/help-dialog.component";
import {FormControl} from "@angular/forms";
import {GenerateFile} from "../../models/generate-file";

@Component({
  selector: 'app-license-display',
  templateUrl: './license-display.component.html',
  styleUrls: ['./license-display.component.css']
})
export class LicenseDisplayComponent implements OnInit {

  result: any;
  license: any = new Array<License>();
  searchResult: License;

  machineNameCtrl: FormControl;
  machineUUIDCtrl: FormControl;
  extraDataCtrl: FormControl;

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

    this.machineNameCtrl = new FormControl();
    this.machineUUIDCtrl = new FormControl();
    this.extraDataCtrl = new FormControl();
  }

  openDialog() {
    let dialogRef = this.dialog.open(HelpDialogComponent);
  }

  createFile() {
    let file = new GenerateFile();
    // file.createdDate = new Date();
    file.salesOrderNo = this.searchResult.salesOrderNo;
    file.sellToCusNo = this.searchResult.sellToCusNo;
    file.sellToCusName = this.searchResult.sellToCusName;
    file.shipToCusNo = this.searchResult.shipToCusNo;
    file.shipToCusName = this.searchResult.shipToCusName;
    file.machineName = this.machineNameCtrl.value;
    file.machineUUID = this.machineUUIDCtrl.value;
    file.extraData = this.extraDataCtrl.value;
    file.products = this.searchResult.products;
    console.log('file:', file);

  }
}
