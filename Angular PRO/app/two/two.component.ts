import {Component, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'example-two',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: [`
    .example-two {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
  template: `
    <div class="example-two">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}

      <button (click)="update()">Internal update</button>
      <p>* should update</p>
    </div>
  `
})
export class ExampleTwoComponent implements OnChanges {
  @Input()
  user;

  // Do rerender view (trigger change detection) if:
  // 1. Property of an input changed externally
  // 2. To @Input() object, additional field is added/removed
  // 3. Input object reassigned/override with completely new object

  ngOnChanges(changes: SimpleChanges) {
    console.log('On default change detection');
    console.log(changes);
  }

  update() {
    this.user.name = 'Scott Raynor';
  }
}
