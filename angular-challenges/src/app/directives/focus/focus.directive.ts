import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appFocus]',
})
export class FocusDirective {
    @Input() parentClass: string;

    @HostListener('focus')
    onFocus(): void {
        const parent: HTMLElement = this.elementRef.nativeElement.parentNode;
        if (parent && parent.classList.contains(this.parentClass)) {
            parent.classList.add('app-focused');
        }
    }

    @HostListener('blur')
    onBlur(): void {
        const parent: HTMLElement = this.elementRef.nativeElement.parentNode;
        if (parent && parent.classList.contains(this.parentClass)) {
            parent.classList.remove('app-focused');
        }
    }

    constructor(private elementRef: ElementRef) {}
}
