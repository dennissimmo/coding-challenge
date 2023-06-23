import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

export interface Person {
    name: string;
    surname: string;
    birthDate: Date;
}

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
    itemsList = [
        'United States',
        'Canada',
        'United Kingdom',
        'Germany',
        'France',
        'Australia',
        'Japan',
        'China',
        'Brazil',
        'India',
    ];
    counterMin = 0;
    counterMax = 200;

    people: Person[] = [
        { name: 'John', surname: 'Doe', birthDate: new Date(1990, 4, 15) },
        { name: 'Jane', surname: 'Smith', birthDate: new Date(1985, 7, 21) },
        {
            name: 'Michael',
            surname: 'Johnson',
            birthDate: new Date(1995, 2, 7),
        },
        { name: 'Emily', surname: 'Brown', birthDate: new Date(1992, 9, 2) },
        {
            name: 'William',
            surname: 'Miller',
            birthDate: new Date(1988, 11, 11),
        },
        { name: 'Olivia', surname: 'Davis', birthDate: new Date(1998, 5, 30) },
        { name: 'James', surname: 'Wilson', birthDate: new Date(1987, 1, 18) },
        {
            name: 'Sophia',
            surname: 'Anderson',
            birthDate: new Date(1991, 8, 25),
        },
        {
            name: 'Benjamin',
            surname: 'Taylor',
            birthDate: new Date(1996, 6, 9),
        },
        { name: 'Ava', surname: 'Thomas', birthDate: new Date(1989, 3, 5) },
    ];

    constructor() {
        // Add additional properties to each person object
        this.people = this.people.map((person) => {
            return {
                ...person,
                email: `${person.name.toLowerCase()}.${person.surname.toLowerCase()}@example.com`,
                phone: '+1234567890',
            };
        });
    }

    update(): void {
        this.progress = 150;
    }

    onTermUpdated($event: string) {
        console.log($event);
    }
}
