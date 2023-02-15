import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {HomesService} from "./homes.service";
import {DialogService} from "../services/dialog.service";
import {BookComponent} from "../components/book/book.component";

export interface Home {
  title: string;
  location: string;
}

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
  providers: [
    DialogService
  ]
})
export class HomesComponent implements OnInit {

  homes$!: Observable<Home[]>;

  constructor(
    private homesService: HomesService,
    private dialogService: DialogService
  ) {
  }

  ngOnInit() {
    this.homes$ = this.homesService.getHomes$();
    /*this.homes$ = of([
      {
      title: 'Home 1',
      location: 'Ukraine'
      } as Home,
      {
        title: 'Home 3',
        location: 'France'
      } as Home,
      {
        title: 'Home 2',
        location: 'China'
      } as Home
    ]);*/
  }

  onBook($event: MouseEvent) {
    this.dialogService.open(
      BookComponent,
      {
        width: '250px',
        data: {}
      }
    );
  }
}
