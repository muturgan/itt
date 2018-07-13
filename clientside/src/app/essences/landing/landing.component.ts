import { Component, Renderer2, AfterContentChecked } from '@angular/core';
import { fadeInAnimation } from '../../share/_animations/fade-in.animation';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [fadeInAnimation],
})
export class LandingComponent implements AfterContentChecked {
  bodySkin = 'landing';

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private translate: TranslateService,
    titleService: Title,
  ) {
    this.renderer.removeClass(document.body, 'internalship');
    this.renderer.addClass(document.body, this.bodySkin);

    translate.addLangs([
      'landing.en',
      'landing.ru',
    ]);
    translate.setDefaultLang('landing.en');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('mainBanner.logo').subscribe((logo: string) => {
        translate.get('mainBanner.header').subscribe((header: string) => {
          titleService.setTitle(`${logo} ${header}`);
        });
      });
    });
    translate.use('landing.ru');
  }

  ngAfterContentChecked(): void {
    if (this.router.url === '/en') {
      this.translate.use('landing.en');
    } else {
      this.translate.use('landing.ru');
    }
  }
}
