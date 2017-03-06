import {Component, OnInit} from '@angular/core';
import {OrderHandlerService} from "./services/order-handler.service";
import {License} from "./models/license";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  onClick() {
    this.router.navigateByUrl('');
  }
}
