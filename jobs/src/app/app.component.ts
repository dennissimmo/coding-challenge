import {Component, OnInit} from '@angular/core';
import {environment} from '@env/environment';
import * as fromRoot from './store';
import {readDictionary} from './store/dictionaries';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jobs';
  isVisible = environment.isTesting;

  constructor(
      private store: Store<fromRoot.State>
  ) {

  }

  ngOnInit() {
      this.store.dispatch(readDictionary());
  }
}
