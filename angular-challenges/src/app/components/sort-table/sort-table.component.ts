import { Component, Input } from '@angular/core';
import { SortingOptions } from '../simple-table/simple-table.component';

@Component({
    selector: 'app-sort-table',
    templateUrl: './sort-table.component.html',
    styleUrls: ['./sort-table.component.scss'],
})
export class SortTableComponent {
    @Input() data: any[];

    sortingOptions: SortingOptions = {
        key: 'none',
        direction: 'asc',
    };

    onSortingChanged(key: SortingOptions): void {
        this.sortingOptions = key;
        this.data = [...this.data].sort((a, b) =>
            this.handleSorting(a, b, key)
        );
    }

    handleSorting(a: any, b: any, key: SortingOptions): number {
        const aValue = a[key.key];
        const bValue = b[key.key];
        if (typeof aValue === 'number') {
            if (key.direction === 'asc') {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        } else if (typeof aValue === 'boolean' || typeof aValue === 'string') {
            if (key.direction === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue > bValue ? -1 : 1;
            }
        }

        return key.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }
}
