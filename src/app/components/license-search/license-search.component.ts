import {Component, OnInit} from '@angular/core';
import {OrderHandlerService} from "../../services/order-handler.service";
import {License} from "../../models/license";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-license-search',
  templateUrl: './license-search.component.html',
  styleUrls: ['./license-search.component.css']
})
export class LicenseSearchComponent implements OnInit {

  license: any = new Array<License>();
  salesOrderCtrl: FormControl;
  sellToCusCtrl: FormControl;
  shipToCusCtrl: FormControl;

  salesOrders = ['236896', '236916', '236811'];
  sellToCusNumbers = ['6001459', '5901459'];
  shipToCusNumbers = ['100035', '5901459', '100071'];
  filteredSalesOrders: any;
  filteredSellToCusNumbers: any;
  filteredShipToCusNumbers: any;

  constructor(private orderHandler: OrderHandlerService) {
    this.salesOrderCtrl = new FormControl();
    this.sellToCusCtrl = new FormControl();
    this.shipToCusCtrl = new FormControl();

    this.filteredSalesOrders = this.salesOrderCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterSalesOrders(name));
    console.log('filteredSalesOrders:', this.filteredSalesOrders);

    this.filteredSellToCusNumbers = this.sellToCusCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterSellToCusNumbers(name));
    console.log('filteredSellToCusNumbers:', this.filteredSellToCusNumbers);

    this.filteredShipToCusNumbers = this.shipToCusCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterShipToCusNumbers(name));
    console.log('filteredShipToCusNumbers:', this.filteredShipToCusNumbers);
  }

  ngOnInit() {
    this.orderHandler.getOrders().subscribe(data => {
      this.license = data;
    })
  }

  filterSalesOrders(val: string) {
    return val ? this.salesOrders.filter((s) => new RegExp(val, 'gi').test(s)) : this.salesOrders;
  }

  filterSellToCusNumbers(val: string) {
    return val ? this.sellToCusNumbers.filter((s) => new RegExp(val, 'gi').test(s)) : this.sellToCusNumbers;
  }

  filterShipToCusNumbers(val: string) {
    return val ? this.shipToCusNumbers.filter((s) => new RegExp(val, 'gi').test(s)) : this.shipToCusNumbers;
  }

}
