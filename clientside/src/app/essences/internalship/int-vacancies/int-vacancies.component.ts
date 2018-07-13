import { Component, /*ViewChild, ElementRef*/  } from '@angular/core';
// import { VacancyModel } from './int-vacancy.model';
import { vacancyModel } from './int-vacancy.d';

@Component({
  selector: 'app-int-vacancies',
  templateUrl: './int-vacancies.component.html',
  styleUrls: ['./int-vacancies.component.scss']
})
export class IntVacanciesComponent {
  // @ViewChild('firstToggler') firstToggler: ElementRef;
  // @ViewChild('secondToggler') secondToggler: ElementRef;

  currentVision: vacancyModel;
  vacanciesVisions: Array<vacancyModel>;

  constructor() {
    this.vacanciesVisions = [
      {
        img: 'url(assets/internalship/img/bg2_img1.jpg)',
        position_str1: 'Стажер-тестировщик/',
        position_str2: 'QA beginner',
        salary: '20 000 руб.',
        experience: 'не требуется',
        internship: 'полный день',
      },
      {
        img: 'url(assets/internalship/img/bg3_img1.jpg)',
        position_str1: 'Тестировщик/QA',
        position_str2: '',
        salary: '50 000 руб.',
        experience: 'от 3 лет',
        internship: 'по результату собеседования',
      },
    ];
    this.currentVision = this.vacanciesVisions[0];
  }

  toggleVacancy(target: HTMLDivElement, firstToggler: HTMLDivElement, secondToggler: HTMLDivElement) {
    if ( !target.classList.contains('active') ) {
      const selectedSlideNumber: number = +target.getAttribute('name');
      this.currentVision = this.vacanciesVisions[selectedSlideNumber];

      firstToggler.classList.toggle('active');
      secondToggler.classList.toggle('active');
    }
  }

}
