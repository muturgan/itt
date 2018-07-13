import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'ng-uikit-pro-standard';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../../core/essences/user/modules/auth/auth.module';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ScrollAnimateDirective } from '../../share/_directives/scrollAnimate/scrollAnimate.directive';
import { YmapDirective } from '../../share/_directives/ymap/ymap.directive';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ThesesComponent } from './theses/theses.component';
import { PartnersComponent } from './partners/partners.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { SmoothScrollDirective } from '../../share/_directives/smothScroll/smoothScroll.directive';
import { ArrowTopDirective } from '../../share/_directives/arrowTop/arrowTop.directive';
import { CallbackComponent } from './callback/callback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastModule } from 'ng-uikit-pro-standard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    SmoothScrollDirective,
    MainBannerComponent,
    AboutComponent,
    ExpertiseComponent,
    ScrollAnimateDirective,
    ArrowTopDirective,
    HowItWorksComponent,
    ThesesComponent,
    PartnersComponent,
    YmapDirective,
    MapComponent,
    FooterComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    AuthenticationModule,
    TranslateModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastModule.forRoot()

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
