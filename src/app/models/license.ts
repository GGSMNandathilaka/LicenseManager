import {Product} from "./product";

export class License {
  id: number;
  salesOrderNo: number;
  sellToCusNo: number;
  sellToCusName: string;
  shipToCusNo: number;
  shipToCusName: string;
  createdDate: string;
  products: Product;
  noOfGeneratedFiles: number;
}
