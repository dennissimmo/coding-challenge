import { Component, Input } from '@angular/core';
import { fadeInOut } from '../../other/animations';
import { delay, of } from 'rxjs';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    animations: [fadeInOut],
})
export class PopupComponent {
    @Input() message: string;

    isVisible: boolean;

    showPopup(): void {
        this.isVisible = true;
        const sub = of(null)
            .pipe(delay(3000))
            .subscribe(() => {
                this.isVisible = false;
                sub.unsubscribe();
            });
    }
}
