import {Product} from "./product";

export class License {
  id: number;
  salesOrderNo: string;
  sellToCusNo: string;
  sellToCusName: string;
  shipToCusNo: string;
  shipToCusName: string;
  createdDate: string;
  products: Product;
  noOfGeneratedFiles: number;
}
