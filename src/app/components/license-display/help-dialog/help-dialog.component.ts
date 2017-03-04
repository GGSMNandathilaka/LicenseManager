import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.css']
})
export class HelpDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<HelpDialogComponent>) {
  }

  ngOnInit() {
  }

}
