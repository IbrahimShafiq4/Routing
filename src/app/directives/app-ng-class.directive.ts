import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appNgClass]',
})
export class NgClassDirective implements OnChanges {
  @Input('appNgClass') classList: { [key: string]: boolean };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.updateClass();
  }

  private updateClass() {
    if (this.classList) {
      for (const className in this.classList) {
        if (this.classList.hasOwnProperty(className)) {
          const shouldAdd = this.classList[className];
          if (shouldAdd) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
          } else {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
          }
        }
      }
    }
  }
}
