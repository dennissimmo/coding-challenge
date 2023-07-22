import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    snackbarMessageSubject: Subject<string> = new Subject<string>();

    constructor() {}

    showMessage(message: string): void {
        this.snackbarMessageSubject.next(message);
    }
}
