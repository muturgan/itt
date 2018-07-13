import { Directive, Renderer2, Input, HostListener, ViewChild } from '@angular/core';
import { ScrollService } from '../../_services/scroll.service';

@Directive({
  selector:'[smoothScroll]'
})
export class SmoothScrollDirective {
  @Input('smoothHref') href: string;
  scroll: ScrollService

  constructor(
    private renderer: Renderer2,
    private scrollService: ScrollService
    ) {
    this.scroll = scrollService;
  }

  @HostListener('click', ['$event']) onClick($event){
    const scrollToEl = document.getElementById(this.href.slice(1));
    const scrollToPos =  scrollToEl.offsetTop;
    this.scroll.directiveScroll.scrollToY(scrollToPos, 700)
    $event.preventDefault();
  }

}
