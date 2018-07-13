import { Component } from '@angular/core';
import { ExpectationModel } from './expectation.model';

@Component({
  selector: 'app-int-expectations',
  templateUrl: './int-expectations.component.html',
  styleUrls: ['./int-expectations.component.scss']
})
export class IntExpectationsComponent {
  expectationsData: Array<ExpectationModel>;

  constructor() {
    this.expectationsData = [
      new ExpectationModel({
        term: 'Базовые знания',
        definition: 'Иметь базовые знания в области компьютерных технологий, программирования и тестирования',
      }),
      new ExpectationModel({
        term: 'Умение мыслить',
        definition: 'Умение мыслить логически и грамотно излагать свои мысли',
      }),
      new ExpectationModel({
        term: 'Характер',
        definition: 'Упорный и настойчивый характер, внимательность к мелочам и деталям',
      }),
      new ExpectationModel({
        term: 'Активность',
        definition: 'Быть активными пользователями смартфонов',
      }),
      new ExpectationModel({
        term: 'Энергия',
        definition: 'Иметь базовые знания в области компьютерных технологий, программирования  и тестирования',
      }),
      new ExpectationModel({
        term: 'Умение мыслить',
        definition: 'Умение мыслить логически и грамотно излагать свои мысли',
      }),
      new ExpectationModel({
        term: 'Характер',
        definition: 'Упорный и настойчивый характер, внимательность к мелочам и деталям',
      }),
      new ExpectationModel({
        term: 'Личные качества',
        definition: 'Быть активными пользователями смартфонов',
      }),
    ];
  }

}
