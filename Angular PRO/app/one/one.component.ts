import {Component, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'example-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .example-one {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
  template: `
    <div class="example-one">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}

      <button (click)="update()">Internal update</button>
      <p>* should not update</p>
    </div>
  `
})
export class ExampleOneComponent implements OnChanges {
  @Input()
  user;

  // Do not rerender view (trigger change detection) if:
  // 1. Property of an input changed externally
  // 2. To @Input() object, additional field is added/removed

  // Do render only, when reference on an object, completely changed
  // 1. Input object reassigned with completely new object

  ngOnChanges(changes: SimpleChanges) {
    console.log('On push change detection');
    console.log(changes);
  }

  update() {
    this.user.name = 'Matt Skiba';
  }
}
