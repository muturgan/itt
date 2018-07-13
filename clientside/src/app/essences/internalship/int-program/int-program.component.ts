import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-int-program',
  templateUrl: './int-program.component.html',
  styleUrls: ['./int-program.component.scss'],
})
export class IntProgramComponent {
  imgPosition: SafeStyle;
  visibility = 'hidden';

  constructor(private sanitizer: DomSanitizer) {}

  activate(target: HTMLLIElement, stepsImg: HTMLImageElement) {
    target.classList.add('active');
    stepsImg.setAttribute('src', target.getAttribute('data-img'));
  }

  deactivate(target: HTMLLIElement) {
    target.classList.remove('active');
  }

  showImg() {
    this.visibility = 'visible';
  }

  moveImg(event: MouseEvent) {
    this.imgPosition = this.sanitizer.bypassSecurityTrustStyle(
      `left: ${ event.pageX + 20 }px; top: ${ event.pageY + 20 }px;`
    );
  }

  hideImg() {
    this.visibility = 'hidden';
  }

}
