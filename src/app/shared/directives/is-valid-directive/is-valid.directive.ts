import { Directive, ElementRef, Renderer, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[isvalid]'
})
export class IsValidDirective implements OnChanges {
  @Input()
  isValid: boolean;


  constructor(
    private el: ElementRef,
    private render: Renderer,
    private render2: Renderer2
    ) {

    }


    ngOnChanges(): void {
      if (this.isValid) {
        this.render.setElementClass(this.el.nativeElement, 'is-invalid', true);
        this.render2.removeClass(this.el.nativeElement, 'is-valid');
       } else {
        this.render.setElementClass(this.el.nativeElement, 'is-valid', true);
        this.render2.removeClass(this.el.nativeElement, 'is-invalid');
       }
    }




}
