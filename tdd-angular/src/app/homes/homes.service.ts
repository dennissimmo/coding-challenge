import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Home} from "./homes.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomesService {

  path = 'assets/homes.json';

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getHomes$(): Observable<Home[]> {
    return this.httpClient.get<any>(this.path);
  }
}
