import { Component, EventEmitter, Output, AfterContentChecked } from '@angular/core';
import { MenuItemModel } from './menuItem.model';
import { Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentChecked {
  @Output() modalToggle = new EventEmitter<boolean>();
  menu: MenuItemModel[];
  active: boolean;
  email: string;
  phone: string;
  changeLocale: string;

  constructor(
    private router: Router,
    // public translate: TranslateService,
  ) {
    this.active = false;
  }

  ngAfterContentChecked(): void {
    if (this.router.url === '/') {
      this.changeLocale = 'en';
      }
    if (this.router.url === '/en') {
      this.changeLocale = '';
    }
  }

  // changeLocale() {
  //   if (this.router.url === '/') {
  //     this.router.navigate(['en']);
  //   }
  //   if (this.router.url === '/en') {
  //     this.router.navigate(['']);
  //   }
  //   -----------------
    // const lang = this.translate.getLangs().filter( x => x !== this.translate.currentLang)[0];
    // this.translate.use(lang);
  // }

  showCallback() {
    this.modalToggle.emit(true);
  }
}
