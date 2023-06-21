import { Component } from '@angular/core';

@Component({
    selector: 'app-pipe-documentation',
    templateUrl: './pipe-documentation.component.html',
    styleUrls: ['./pipe-documentation.component.scss'],
})
export class PipeDocumentationComponent {
    flattenData = [1, [2], [3, 4, 5]];
    term = ['Help', 'Junior', 'give', 'their', 'first', 'job', 'not only job'];

    pushItem(): void {
        this.flattenData.push(4);
    }

    reassign(): void {
        this.flattenData = [...this.flattenData];
    }
}
