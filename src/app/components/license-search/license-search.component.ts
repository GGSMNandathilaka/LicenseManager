import {Component, OnInit} from '@angular/core';
import {OrderHandlerService} from "../../services/order-handler.service";
import {License} from "../../models/license";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

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

  searchResult: any;
  isRefresh: boolean = false;

  constructor(private orderHandler: OrderHandlerService,
              private router: Router) {
    this.salesOrderCtrl = new FormControl();
    this.sellToCusCtrl = new FormControl();
    this.shipToCusCtrl = new FormControl();

    this.filteredSalesOrders = this.salesOrderCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterSalesOrders(name));

    this.filteredSellToCusNumbers = this.sellToCusCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterSellToCusNumbers(name));

    this.filteredShipToCusNumbers = this.shipToCusCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterShipToCusNumbers(name));
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

  search() {
    console.log('value1:', this.salesOrderCtrl.value);
    console.log('value2:', this.sellToCusCtrl.value);
    console.log('value3:', this.shipToCusCtrl.value);

    this.searchResult = [];
    this.isRefresh = false;

    // check result is null or not todo this should be move into backend
    if ((this.salesOrderCtrl.value !== null && this.salesOrderCtrl.value !== '')
      && (this.sellToCusCtrl.value === null || this.sellToCusCtrl.value === '')
      && (this.shipToCusCtrl.value === null || this.shipToCusCtrl.value === '')) {
      for (let i = 0; i < this.license.length; i++) {
        if (this.license[i].salesOrderNo === this.salesOrderCtrl.value) {
          this.searchResult.push(this.license[i]);
        }
      }
    }
    else if (this.salesOrderCtrl.value !== null && this.salesOrderCtrl.value !== ''
      && this.sellToCusCtrl.value !== null && this.sellToCusCtrl.value !== ''
      && (this.shipToCusCtrl.value === null || this.shipToCusCtrl.value === '')) {
      for (let i = 0; i < this.license.length; i++) {
        if (this.license[i].salesOrderNo === this.salesOrderCtrl.value && this.license[i].sellToCusNo === this.sellToCusCtrl.value) {
          this.searchResult.push(this.license[i]);
        }
      }
    }
    else if (this.salesOrderCtrl.value !== null && this.salesOrderCtrl.value !== ''
      && (this.sellToCusCtrl.value === null || this.sellToCusCtrl.value === '')
      && this.shipToCusCtrl.value !== null && this.shipToCusCtrl.value !== '') {
      for (let i = 0; i < this.license.length; i++) {
        if (this.license[i].salesOrderNo === this.salesOrderCtrl.value && this.license[i].shipToCusNo === this.shipToCusCtrl.value) {
          this.searchResult.push(this.license[i]);
        }
      }
    }
    else if (this.salesOrderCtrl.value !== null && this.salesOrderCtrl.value !== ''
      && this.sellToCusCtrl.value !== null && this.sellToCusCtrl.value !== ''
      && this.shipToCusCtrl.value !== null && this.shipToCusCtrl.value !== '') {
      for (let i = 0; i < this.license.length; i++) {
        if (this.license[i].salesOrderNo === this.salesOrderCtrl.value && this.license[i].sellToCusNo === this.sellToCusCtrl.value
          && this.license[i].shipToCusNo === this.shipToCusCtrl.value) {
          this.searchResult.push(this.license[i]);
        }
      }
    }
    else if ((this.salesOrderCtrl.value === null || this.salesOrderCtrl.value === '')
      && this.sellToCusCtrl.value !== null && this.sellToCusCtrl.value !== ''
      && this.shipToCusCtrl.value !== null && this.shipToCusCtrl.value !== '') {
      for (let i = 0; i < this.license.length; i++) {
        if (this.license[i].sellToCusNo === this.sellToCusCtrl.value && this.license[i].shipToCusNo === this.shipToCusCtrl.value) {
          this.searchResult.push(this.license[i]);
        }
      }
    }
    else if ((this.salesOrderCtrl.value === null || this.salesOrderCtrl.value === '')
      && (this.sellToCusCtrl.value === null || this.sellToCusCtrl.value === '')
      && this.shipToCusCtrl.value !== null && this.shipToCusCtrl.value !== '') {
      for (let i = 0; i < this.license.length; i++) {
        if (this.license[i].shipToCusNo === this.shipToCusCtrl.value) {
          this.searchResult.push(this.license[i]);
        }
      }
    }
    else if ((this.salesOrderCtrl.value === null || this.salesOrderCtrl.value === '')
      && this.sellToCusCtrl.value !== null && this.sellToCusCtrl.value !== ''
      && (this.shipToCusCtrl.value === null || this.shipToCusCtrl.value === '')) {
      for (let i = 0; i < this.license.length; i++) {
        if (this.license[i].sellToCusNo === this.sellToCusCtrl.value) {
          this.searchResult.push(this.license[i]);
        }
      }
    }

    console.log('search-result:', this.searchResult);
  }

  searchFromSalesOrderNo(value: string) {
    let result = [];
    for (let i = 0; i < this.license.length; i++) {
      if (this.license[i].salesOrderNo === value) {
        result.push(this.license[i]);
      }
    }
    return result;
  }

  searchFromSellToCusNo(value: string) {
    let result = [];
    for (let i = 0; i < this.license.length; i++) {
      if (this.license[i].sellToCusNo === value) {
        result.push(this.license[i]);
      }
    }
    return result;
  }

  searchFromShipToCusNo(value: string) {
    let result = [];
    for (let i = 0; i < this.license.length; i++) {
      if (this.license[i].shipToCusNo === value) {
        result.push(this.license[i]);
      }
    }
    return result;
  }

  onClickResult(result) {
    console.log('clicked-result:', result);
    let url = 'search-result/' + result.id;
    this.router.navigate([url]);
  }

  refresh() {
    this.isRefresh = true;
    this.searchResult = [];
    this.salesOrderCtrl.reset();
    this.sellToCusCtrl.reset();
    this.shipToCusCtrl.reset();
  }
}
