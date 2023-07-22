import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { Tab } from '../tabs/tabs.component';
import { Position, RibbonType } from '../ribbon/ribbon.component';
import { ToggleValue } from '../toggle-group/toggle-group.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

export interface Person {
    name: string;
    surname: string;
    birthDate: string;
    sex: string;
    isMarried: boolean;
}

@Component({
    selector: 'app-component-documentation',
    templateUrl: './component-documentation.component.html',
    styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
    @ViewChild(SnackbarComponent) snackBar: SnackbarComponent;

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

    positionType: Position;
    type: RibbonType;
    positionTypeEnum = Position;
    typeEnum = RibbonType;

    people: Person[] = [
        {
            name: 'John',
            surname: 'Doe',
            birthDate: '1990/4/15',
            sex: 'male',
            isMarried: true,
        },
        {
            name: 'Jane',
            surname: 'Smith',
            birthDate: '1918/2/10',
            sex: 'male',
            isMarried: true,
        },
        {
            name: 'Michael',
            surname: 'Johnson',
            birthDate: '1918/2/10',
            sex: 'male',
            isMarried: false,
        },
        {
            name: 'Emily',
            surname: 'Brown',
            birthDate: '1918/2/10',
            sex: 'female',
            isMarried: true,
        },
        {
            name: 'William',
            surname: 'Miller',
            birthDate: '1918/2/10',
            sex: 'male',
            isMarried: false,
        },
        {
            name: 'Olivia',
            surname: 'Davis',
            birthDate: '2018/2/10',
            sex: 'female',
            isMarried: true,
        },
        {
            name: 'James',
            surname: 'Wilson',
            birthDate: '1938/2/10',
            sex: 'male',
            isMarried: false,
        },
        {
            name: 'Sophia',
            surname: 'Anderson',
            birthDate: '1918/2/10',
            sex: 'female',
            isMarried: true,
        },
        {
            name: 'Benjamin',
            surname: 'Taylor',
            birthDate: '1918/2/10',
            sex: 'male',
            isMarried: false,
        },
        {
            name: 'Ava',
            surname: 'Thomas',
            birthDate: '1918/2/10',
            sex: 'male',
            isMarried: false,
        },
    ];
    tabs: Tab[] = [
        {
            title: 'Quotes',
            isActive: true,
        },
        {
            title: 'Options',
            isActive: false,
        },
    ];

    selectedIndex = 0;
    toggleGroup: ToggleValue[] = [
        {
            label: 'Angular',
            value: 'Angular',
            isSelected: true,
        },
        {
            label: 'React',
            value: 'React JS',
        },
        {
            label: 'Vue',
            value: 'Vue JS',
        },
        {
            label: 'Svelt',
            value: 'Svelt JS',
        },
    ];

    constructor(private snackbarService: SnackbarService) {
        // Add additional properties to each person object
        this.people = this.people.map((person) => {
            return {
                ...person,
                email: `${person.name.toLowerCase()}.${person.surname.toLowerCase()}@example.com`,
                phone: '+1234567890',
            };
        });

        this.positionType = Position.TOP_RIGHT;
    }

    update(): void {
        this.progress = 150;
    }

    onTermUpdated($event: string) {
        console.log($event);
    }

    showSnackBar(): void {
        this.snackbarService.showMessage('Snackbar triggered through service');
        // this.snackBar.showMessage();
    }
}
