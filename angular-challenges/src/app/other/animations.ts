import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({
            opacity: 0,
        }),
        animate(
            500,
            style({
                opacity: 1,
            })
        ),
    ]),
    transition(':leave', [
        animate(
            500,
            style({
                opacity: 0,
            })
        ),
    ]),
]);

export const fadeUpDown = trigger('fadeUpDown', [
    transition(':enter', [
        style({
            bottom: 0,
        }),
        animate(
            300,
            style({
                bottom: '30px',
            })
        ),
    ]),
    transition(':leave', [
        animate(
            500,
            style({
                bottom: 0,
            })
        ),
    ]),
]);
