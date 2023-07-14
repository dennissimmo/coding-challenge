import { Component, Input } from '@angular/core';
import { fadeInOut, fadeUpDown } from '../../other/animations';
import { delay, of } from 'rxjs';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
    animations: [fadeInOut, fadeUpDown],
})
export class SnackbarComponent {
    @Input() message: string;

    isVisible: boolean;

    showMessage(): void {
        this.isVisible = true;
        const sub = of(null)
            .pipe(delay(2000))
            .subscribe(() => {
                this.isVisible = false;
                sub.unsubscribe();
            });
    }
}
