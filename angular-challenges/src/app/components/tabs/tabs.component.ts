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
import { TabComponent } from './tab/tab.component';

export interface Tab {
    title: string;
    isActive: boolean;
}

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterContentInit {
    @Input() tabs: Tab[];
    @Input() activeIndex: number;
    @Output() tabChanged = new EventEmitter<string>();

    @ContentChildren(TabComponent, { read: ElementRef })
    tabsComponents: QueryList<ElementRef>;

    activeTab: string;

    ngOnInit(): void {}

    ngAfterContentInit(): void {
        if (this.activeIndex !== undefined) {
            const activeTab = this.tabs[this.activeIndex]?.title;
            this.updateTab(activeTab);
        } else {
            this.activeTab = this.tabs.find((tab) => tab.isActive)?.title || '';
        }
    }

    updateTab(title: string) {
        this.tabs.forEach((tab) => (tab.isActive = tab.title === title));
        this.activeTab = title;
        this.updateActiveTabStyles();
        this.tabChanged.emit();
    }

    updateActiveTabStyles(): void {
        this.tabsComponents.forEach((tab) => {
            tab.nativeElement.style.display = 'none';
            if (tab.nativeElement.title === this.activeTab) {
                tab.nativeElement.style.display = 'block';
            }
        });
    }
}
