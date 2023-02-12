import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Log} from "../state/state";

@Component({
  selector: 'app-logs-list-presenter',
  templateUrl: './logs-list-presenter.component.html',
  styleUrls: ['./logs-list-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogsListPresenterComponent {


  @Input() logs: Log[] | null = [];

  @Output()
  logAdded: EventEmitter<Log> = new EventEmitter<Log>();

  @Output()
  logRemoved: EventEmitter<string> = new EventEmitter<string>();

  onLogAdded(): void {
    this.logAdded.emit();
  }

  onLogRemoved(): void {
    this.logRemoved.emit();
  }

}
