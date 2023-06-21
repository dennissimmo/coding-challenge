import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-search-list',
    templateUrl: './search-list.component.html',
    styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
    @Input() list: string[];

    public hasBeenSelected: boolean;

    searchTerm: string;

    onTermUpdated($event: string) {
        this.searchTerm = $event;
        this.hasBeenSelected = false;
    }

    selectItem(item: string) {
        this.searchTerm = item;
        this.hasBeenSelected = true;
    }
}
