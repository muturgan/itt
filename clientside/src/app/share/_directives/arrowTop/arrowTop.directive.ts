import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {ScrollService} from '../../_services/scroll.service';

@Directive({
  selector:'[arrowTop]'
})
export class ArrowTopDirective {
  @Input('arrowTop') scrollTop: number;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private scrollService: ScrollService) {
    this.scrollService.position.subscribe(
      (data: any) => {
        if (data.y >= this.scrollTop) {
          renderer.addClass(el.nativeElement, 'active');
        } else {
          renderer.removeClass(el.nativeElement, 'active');
        }
      });
  }
}
