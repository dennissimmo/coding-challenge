import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Log} from "./state/state";

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  readonly baseUrl = "http://localhost:3000/logs";

  constructor(
    private http: HttpClient
  ) {

  }

  getLogs(): Observable<Array<Log>> {
    return this.http.get<Array<Log>>(this.baseUrl);
  }

}
