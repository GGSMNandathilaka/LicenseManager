import {Product} from "./product";

export class GenerateFile {
  id: number;
  salesOrderNo: string;
  sellToCusNo: string;
  sellToCusName: string;
  shipToCusNo: string;
  shipToCusName: string;
  createdDate: Date;
  products: Product[];
  noOfGeneratedFiles: number;
  machineName: string;
  machineUUID: string;
  extraData: string;
}
