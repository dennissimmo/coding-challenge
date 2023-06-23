import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {
    @Input() data: any[];
}
