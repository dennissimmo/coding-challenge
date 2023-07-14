import { Component, Input } from '@angular/core';

export enum Position {
    TOP_RIGHT = 'top-right',
    TOP_LEFT = 'top-left',
    BOTTOM_RIGHT = 'bottom-right',
    BOTTOM_LEFT = 'bottom-left',
}

export enum RibbonType {
    INFO,
    ERROR,
    SUCCESS,
    WARNING,
}

@Component({
    selector: 'app-ribbon',
    templateUrl: './ribbon.component.html',
    styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent {
    @Input() label: string;
    @Input() position: Position = Position.TOP_RIGHT;
    @Input() type: RibbonType = RibbonType.SUCCESS;

    get ribbonType(): string {
        if (this.type) {
            return RibbonType[this.type].toLowerCase();
        }

        return RibbonType[RibbonType.WARNING].toLowerCase();
    }

    get positionType(): string {
        if (this.position) {
            return this.position;
        }

        return Position.TOP_RIGHT;
    }
}
