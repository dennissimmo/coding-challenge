import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
    selector: 'app-component-documentation',
    templateUrl: './component-documentation.component.html',
    styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
    title = 'angular-challenges';
    items: AccordionItem[] = [
        {
            title: 'Example 1',
            isExpanded: false,
            content: 'Example 1 Content',
        },
        {
            title: 'Example 2',
            isExpanded: false,
            content: 'Example 2 Content',
        },
    ];
    progress = 25;

    constructor() {}

    update(): void {
        this.progress = 150;
    }

    onTermUpdated($event: string) {
        console.log($event);
    }
}
