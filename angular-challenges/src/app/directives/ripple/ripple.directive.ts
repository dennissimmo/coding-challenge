import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appRipple]',
})
export class RippleDirective implements AfterViewInit {
    @Input() color: string;

    @HostListener('click', ['$event'])
    onClick(event: PointerEvent) {
        console.log(event);
        const diameter = Math.max(
            this.nativeRef.clientWidth,
            this.nativeRef.clientHeight
        );
        const radius = diameter / 2;
        // add ripple element
        const ripple = this.renderer.createElement('span');
        this.renderer.setStyle(ripple, 'width', `${diameter}px`);
        this.renderer.setStyle(ripple, 'height', `${diameter}px`);
        this.renderer.setStyle(
            ripple,
            'left',
            `${
                event.pageX -
                (this.nativeRef.getBoundingClientRect().left + scrollX) -
                radius
            }px`
        );
        this.renderer.setStyle(
            ripple,
            'top',
            `${
                event.pageY -
                (this.nativeRef.getBoundingClientRect().top + scrollY) -
                radius
            }px`
        );
        this.renderer.addClass(ripple, 'ripple');
        this.renderer.appendChild(this.elementRef.nativeElement, ripple);
        // remove ripple element after some timeout
        const timeout = this.getAnimationDuration(ripple);

        setTimeout(() => {
            this.renderer.removeChild(this.elementRef, ripple);
        }, timeout);
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'transition',
            'all .9s'
        );
        this.renderer.setStyle(this.nativeRef, 'backgroundColor', this.color);
        this.renderer.setStyle(this.nativeRef, 'color', 'white');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.renderer.setStyle(this.nativeRef, 'backgroundColor', 'unset');
        this.renderer.setStyle(this.nativeRef, 'color', 'inherit');
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    get nativeRef(): HTMLElement {
        return this.elementRef.nativeElement;
    }

    ngAfterViewInit(): void {
        this.renderer.setStyle(this.nativeRef, 'overflow', 'hidden');
        this.renderer.setStyle(this.nativeRef, 'position', 'relative');
    }

    getAnimationDuration(el: HTMLElement): number {
        const aDuration = window.getComputedStyle(el).animationDuration;
        return aDuration.includes('ms')
            ? +aDuration.replace('ms', '')
            : +aDuration.replace('s', '') * 1000;
    }
}
