import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-internalship',
  templateUrl: './internalship.component.html',
  styleUrls: ['./internalship.component.scss'],
})
export class InternalshipComponent {
  bodySkin = 'internalship';

  constructor(
    private renderer: Renderer2,
  ) {
    this.renderer.removeClass(document.body, 'landing');
    this.renderer.addClass(document.body, this.bodySkin);
  }

}
