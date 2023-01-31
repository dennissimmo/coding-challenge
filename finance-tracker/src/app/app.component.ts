import {Component, OnInit} from '@angular/core';
import {addCategory} from "./state/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'finance-tracker';

  ngOnInit() {
    console.log(addCategory({category: {name: 'Food'}}));;
  }
}
