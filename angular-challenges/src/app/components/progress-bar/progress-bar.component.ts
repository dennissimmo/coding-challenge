import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  filledWidth: string;
  progress: number;

  @Input()
  set value(progress: number) {
    this.progress = progress;
    this.filledWidth = `calc(${this.progress / this.max * 100}%)`;
  }

  @Input()
  public max = 100;


}
