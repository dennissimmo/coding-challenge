import {
    AfterContentInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
} from '@angular/core';

export interface Tab {
    title: string;
    isActive: boolean;
}

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
    @Input() tabs: Tab[];
    @Output() tabChanged = new EventEmitter<number>();

    activeTab: string;

    updateTab(title: string, index: number) {
        this.tabs.forEach((tab) => (tab.isActive = tab.title === title));
        this.activeTab = title;
        this.tabChanged.emit(index);
    }
}
