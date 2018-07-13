import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-int-modals',
  templateUrl: './int-modals.component.html',
  styleUrls: ['./int-modals.component.scss']
})
export class IntModalsComponent {

  constructor(
    private renderer: Renderer2,
  ) {}

  modalOpen(target) {
    this.renderer.addClass(target, 'modal-open');
  }

  modalClose(target) {
    this.renderer.removeClass(target, 'modal-open');
  }

  closeBoth() {
    // this.renderer.removeClass(kd__modal, 'modal-open');
    // this.renderer.removeClass(kd__modal_bg, 'modal-open');
  }

}
