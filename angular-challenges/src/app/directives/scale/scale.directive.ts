import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScale]',
})
export class ScaleDirective {
    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'transition',
            'all .3s'
        );
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'transform',
            'scale(1.25)'
        );
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'transform',
            'scale(1)'
        );
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
