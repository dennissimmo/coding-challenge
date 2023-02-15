import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private matDialog: MatDialog
  ) { }

  open(component, info) {
    this.matDialog.open(component, info);
  }
}
