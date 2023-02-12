import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../state/state";
import {logsListLoaded} from "../state/actions";
import {Observable} from "rxjs";
import {Log} from "../state/state";
import {logs} from "../state/selectors";

@Component({
  selector: 'app-logs-list-container',
  templateUrl: './logs-list-container.component.html',
  styleUrls: ['./logs-list-container.component.scss']
})
export class LogsListContainerComponent implements OnInit {

  logsList: Observable<Array<Log>> = this.store.select(logs);

  constructor(
    private readonly store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(logsListLoaded());
  }

}
