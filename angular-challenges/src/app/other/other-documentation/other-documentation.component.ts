import { Component } from '@angular/core';
import { fadeInOut } from '../animations';

@Component({
    selector: 'app-other-documentation',
    templateUrl: './other-documentation.component.html',
    styleUrls: ['./other-documentation.component.scss'],
    animations: [fadeInOut],
})
export class OtherDocumentationComponent {
    isHeaderVisible: boolean;

    toggleAnimation() {
        this.isHeaderVisible = !this.isHeaderVisible;
    }
}
