import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from "rxjs";

const DEBOUNCE_TIME = 500;

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective implements OnInit, OnDestroy {

  @Output() onClicked: EventEmitter<void> = new EventEmitter<void>();

  subscription: Subscription;

  constructor(
    private _elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.subscription = fromEvent(this._elementRef.nativeElement, 'click')
      .pipe(
        debounceTime(DEBOUNCE_TIME)
      ).subscribe(() => this.onClicked.emit());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
