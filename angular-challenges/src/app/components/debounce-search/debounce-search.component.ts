import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
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
export class DebounceSearchComponent implements OnInit, OnDestroy {
    @Input() searchTerm: string;
    @Input() placeholder: string;
    @Input() interval = 500;
    @Output() termUpdated = new EventEmitter<string>();

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
