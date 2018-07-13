import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './essences/landing/landing.component';
import { InternalshipComponent } from './essences/internalship/internalship.component';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'en', component: LandingComponent },
  { path: 'internalship', component: InternalshipComponent },
  { path: 'nothing-to-see-here', component: AccessForbiddenComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [
  PageNotFoundComponent
];
