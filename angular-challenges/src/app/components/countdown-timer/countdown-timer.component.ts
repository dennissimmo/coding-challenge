import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';

export interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

@Component({
    selector: 'app-countdown-timer',
    templateUrl: './countdown-timer.component.html',
    styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
    currentTime: Countdown;
    intervalId: number;
    seconds: number;

    @Input() set time(time: number) {
        this.seconds = time;
        this.currentTime = this.calculateTime(this.seconds);
        // if input data will be a date represented by string
        const stringDate = 'Sat Jul 22 2023 16:01:15';
        const date = new Date(stringDate);
        if (date.getTime() > Date.now()) {
            const differenceInSeconds = (date.getTime() - Date.now()) * 1000; // difference in seconds
            // this.seconds = differenceInSeconds;
            // this.currentTime = this.calculateTime(this.seconds);
        }
    }

    @Output() timerFinished: EventEmitter<void> = new EventEmitter<void>();

    ngOnInit(): void {
        this.intervalId = setInterval(() => {
            this.seconds--;
            this.currentTime = this.calculateTime(this.seconds);
            if (this.isOver(this.currentTime)) {
                this.timerFinished.emit();
                clearTimeout(this.intervalId);
            }
        }, 1000);
    }

    ngOnDestroy(): void {
        clearTimeout(this.intervalId);
    }

    isOver(time: Countdown): boolean {
        return !time.seconds && !time.minutes && !time.hours && !time.days;
    }

    calculateTime(seconds: number): Countdown {
        let countdown: Countdown = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (seconds < 60) {
            countdown = {
                ...countdown,
                seconds,
            };
        } else if (seconds > 60 && seconds < 3600) {
            countdown = {
                days: 0,
                hours: 0,
                minutes: Math.floor(seconds / 60),
                seconds: seconds % 60,
            };
        } else if (seconds > 3600 && seconds < 3600 * 24) {
            countdown = {
                days: 0,
                hours: Math.floor(seconds / 3600),
                minutes: Math.floor(seconds / 60) % 60,
                seconds: seconds % 60,
            };
        } else {
            countdown = {
                days: Math.floor(seconds / 3600 / 24),
                hours: Math.floor(seconds / 3600) % 24,
                minutes: Math.floor(seconds / 60) % 60,
                seconds: seconds % 60,
            };
        }

        return countdown;
    }
}
