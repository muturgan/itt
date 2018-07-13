import {Directive, ElementRef, Renderer2, Input} from '@angular/core';
import {ScrollService} from '../../_services/scroll.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[scrollAnimate]'
})
export class ScrollAnimateDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('scrollAnimate') animation: string;
  // tslint:disable-next-line:no-input-rename
  @Input('delay') delay: number;

  constructor( private el: ElementRef,
          private renderer: Renderer2,
          private scrollService: ScrollService) {

    renderer.setStyle(el.nativeElement, 'opacity', '0');
    this.scrollService.position.subscribe(
      (data: any) => {
        const windowHeight = window.innerHeight;
        const offsetTop = el.nativeElement.getBoundingClientRect().top;

        if (offsetTop + 50 <= windowHeight) {
          if (this.delay) {
            return setTimeout(() => {
              this.animate();
            }, this.delay);
          }
          this.animate();
        }
      });
  }

  animate() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.addClass(this.el.nativeElement, 'animated');
    this.renderer.addClass(this.el.nativeElement, this.animation);
  }

}
