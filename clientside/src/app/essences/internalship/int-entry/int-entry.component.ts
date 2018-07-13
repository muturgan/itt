import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-int-entry',
  templateUrl: './int-entry.component.html',
  styleUrls: ['./int-entry.component.scss']
})
export class IntEntryComponent {
  backgroundImgPath: SafeStyle;
  circlesData: Array<{
    href: string,
    img: string,
    headerText: string,
    subheaderText?: string,
  }>;

  constructor(private sanitizer: DomSanitizer) {
    this.backgroundImgPath = sanitizer.bypassSecurityTrustStyle('url(assets/internalship/img/bg1_defoult.jpg)');

    this.circlesData = [
      {
        href: '/internalship#bg2',
        img: 'assets/internalship/img/bg1_bg1.jpg',
        headerText: '({вакансии}',
      },
      {
        href: '/internalship#bg7',
        img: 'assets/internalship/img/bg1_bg2.jpg',
        headerText: '{как пройти обучение и работать у нас})',
        subheaderText: 'IT-Тестировщик',
      }
    ];
  }

  onChangeBackground(imgPath: string) {
    this.backgroundImgPath = this.sanitizer.bypassSecurityTrustStyle(`url(${ imgPath })`);
  }

}
