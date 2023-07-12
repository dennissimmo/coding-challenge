import { Component, EventEmitter, Input, Output } from '@angular/core';

export type SortingOptions = {
    key: string;
    value: any;
    direction: string;
};

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {
    @Input() data: any[];
    @Input() sortingOptions: SortingOptions;
    @Output() sortingChanged: EventEmitter<SortingOptions> =
        new EventEmitter<SortingOptions>();

    onHeaderClick(title: any, value: any): void {
        this.sortingOptions = {
            key: title,
            value,
            direction: this.sortingOptions.direction === 'asc' ? 'desc' : 'asc',
        };
        this.sortingChanged.emit(this.sortingOptions);
    }
}
