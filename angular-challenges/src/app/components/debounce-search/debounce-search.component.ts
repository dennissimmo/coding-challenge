import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    debounceTime,
    distinctUntilChanged,
    Observable,
    Subject,
    Subscription,
} from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-debounce-search',
    templateUrl: './debounce-search.component.html',
    styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent {
    @Input() interval: number;
    @Output() termUpdated = new EventEmitter<string>();

    searchTerm: string;
    searchTermSubject = new Subject<string>();
    searchTerm$: Observable<string>;
    subscription: Subscription;

    ngOnInit(): void {
        this.searchTerm$ = this.searchTermSubject.pipe(
            debounceTime(this.interval),
            distinctUntilChanged(),
            tap(() => this.termUpdated.emit(this.searchTerm))
        );
        this.subscription = this.searchTerm$.subscribe();
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    onTermChange(value: string) {
        this.searchTermSubject.next(value);
    }
}
