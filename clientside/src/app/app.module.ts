import { NgModule, LOCALE_ID, NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, RoutedComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { LandingModule } from './essences/landing/landing.module';
import { InternalshipModule } from './essences/internalship/internalship.module';

import { CoreModule } from './core/core.module';
import { EqualValidator } from './share/_directives/equal-validator/equal-validator.directive';
import { JwtInterceptor } from './share/_helpers/jwt.interceptor';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';


/*TODO: use mdb alert service instead of custom */
/*Perfect scrollbar*/
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
/*end of Perfect scrollbar*/

import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  // INFO: If you want to change the defaul path from '/assets/i18n/'
  // to something else, you can set a new path to the locale files as a secong argument
  return new TranslateHttpLoader(http);
}
import { ScrollService } from './share/_services/scroll.service';
import { Store } from './share/_globals/store';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  scrollingThreshold: 1000,
};

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents,
    AccessForbiddenComponent,
    EqualValidator
  ],
  imports: [
    CoreModule,
    LandingModule,
    InternalshipModule,

    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    // NgbModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    RouterModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    PerfectScrollbarModule
  ],
  exports: [ // TODO: Optimize exports in accordance with the multiple calls in children components
    TranslateModule
  ],
  providers: [
    {
      provide: XSRFStrategy,
      useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken'),
    },
    {
      provide: LOCALE_ID,
      useValue: 'en-EN'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    MDBSpinningPreloader,
    ScrollService,
    Store
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {

  }
}
