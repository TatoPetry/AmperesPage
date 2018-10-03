import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[menuClose]'
})
export class CloseMenuDirective {

  @Input()
  public menu: ElementRef<any>;

  constructor(
    private el: ElementRef,
    private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.render.removeClass(this.menu, 'show');
  }


}
