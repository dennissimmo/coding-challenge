import {Component, OnInit} from '@angular/core';
import {addCategory} from "./state/actions";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'finance-tracker';

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    console.log(addCategory({category: {name: 'Food'}}));;
  }
}
