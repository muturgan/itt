import { Component } from '@angular/core';

@Component({
  selector: 'app-int-how-it-works',
  templateUrl: './int-how-it-works.component.html',
  styleUrls: ['./int-how-it-works.component.scss'],
})
export class IntHowItWorksComponent {

  constructor() {}

  toggleForm(section7: HTMLTableSectionElement) {
    section7.classList.toggle('questions_form');
  }

}
