import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import * as actions from "./actions";
import {catchError, mergeMap, of} from "rxjs";
import { map, tap } from "rxjs/operators";
import {LogsService} from "../logs.service";
import {logsListLoadedError, logsListLoadedSuccess} from "./actions";

@Injectable()
export class LogsEffects {

  constructor(
    private actions$: Actions,
    private logsService: LogsService
  ) {
  }

  loadLogs = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.logsListLoaded),
      mergeMap(() =>
        this.logsService.getLogs().pipe(
          tap(data => console.log(data)),
          map(logs => logsListLoadedSuccess({ payload: { logs } })),
          catchError(() => of(logsListLoadedError({ payload: { message: 'Logs Loading Error'}})))
        )
      )
    )
  );

 /* handleLoadingState = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.logsListLoaded, actions.logsListLoadedSuccess),
      mergeMap(() => )
    )
  );*/

}
