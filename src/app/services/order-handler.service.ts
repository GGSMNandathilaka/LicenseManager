import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {License} from "../models/license";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderHandlerService {

  data: License[];

  constructor(private http: Http) {
  }

  public getOrders(): any {
    return this.http.get("assets/config.json")
      .map((res: any) => res.json());
  }
}
