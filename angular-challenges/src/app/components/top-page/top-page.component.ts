import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
  animations: [
    trigger('scrollBtn', [
      transition(':enter', [
          style({
              transform: 'scale(0)',
              transformOrigin: 'bottom right'
          }),
          animate('.3s ease-out', style({
              transform: 'scale(1)'
            })
          )
        ])
      ]
    )
  ]
})
export class TopPageComponent {

  position: [number, number];
  isButtonVisible: boolean;
  showRange = 200;

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = this.viewPortScroller.getScrollPosition();
    if (scrollPosition) {
      this.position = scrollPosition;
      this.isButtonVisible = this.position[1] > this.showRange;
    }
  }

  constructor(
    private viewPortScroller: ViewportScroller
  ) {

  }

  toTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }


}
