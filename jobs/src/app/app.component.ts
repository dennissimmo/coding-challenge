import {Component, OnInit} from '@angular/core';
import {environment} from '@env/environment';
import * as fromRoot from './store';
import * as fromUser from './store/user';
import {readDictionary} from './store/dictionaries';
import {Store} from "@ngrx/store";
import {init} from "@app/store/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jobs';
  isVisible = environment.isTesting;
  isAuthorized$ = this.store.select(fromUser.isAuthorized);

  constructor(
      private store: Store<fromRoot.State>
  ) {

  }

  ngOnInit() {
      this.store.dispatch(init());
      this.store.dispatch(readDictionary());
  }

    onSignOut() {
        this.store.dispatch(fromUser.signOut());
    }
}
