import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntHeaderComponent } from './int-header/int-header.component';
import { IntFooterComponent } from './int-footer/int-footer.component';
import { InternalshipComponent } from './internalship.component';
import { IntEntryComponent } from './int-entry/int-entry.component';
import { IntVacanciesComponent } from './int-vacancies/int-vacancies.component';
import { IntSnippetComponent } from './int-snippet/int-snippet.component';
import { IntOffersComponent } from './int-offers/int-offers.component';
import { IntExpectationsComponent } from './int-expectations/int-expectations.component';
import { IntProgramComponent } from './int-program/int-program.component';
import { IntHowItWorksComponent } from './int-how-it-works/int-how-it-works.component';
import { IntDailyRoutineComponent } from './int-daily-routine/int-daily-routine.component';
import { IntModalsComponent } from './int-modals/int-modals.component';
import { IntCircleComponent } from './int-entry/int-circle/int-circle.component';
import { IntVacancyComponent } from './int-vacancies/int-vacancy/int-vacancy.component';
import { IntExpectationsItemComponent } from './int-expectations/int-expectations-item/int-expectations-item.component';
import { IntQuestionsFormComponent } from './int-questions-form/int-questions-form.component';
import { IntDailyRoutineItemComponent } from './int-daily-routine/int-daily-routine-item/int-daily-routine-item.component';
import { IntOfferComponent } from './int-offers/int-offer/int-offer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IntHeaderComponent,
    IntFooterComponent,
    InternalshipComponent,
    IntEntryComponent,
    IntVacanciesComponent,
    IntSnippetComponent,
    IntOffersComponent,
    IntExpectationsComponent,
    IntProgramComponent,
    IntHowItWorksComponent,
    IntDailyRoutineComponent,
    IntModalsComponent,
    IntCircleComponent,
    IntVacancyComponent,
    IntExpectationsItemComponent,
    IntQuestionsFormComponent,
    IntDailyRoutineItemComponent,
    IntOfferComponent,
  ],
  bootstrap: [InternalshipComponent],
})
export class InternalshipModule {}
