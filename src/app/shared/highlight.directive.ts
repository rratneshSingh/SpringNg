import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('highLightColor') color = null;

  constructor(private el: ElementRef ) { }

  @HostListener( 'mouseenter' ) onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener( 'mouseleave' ) onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}
