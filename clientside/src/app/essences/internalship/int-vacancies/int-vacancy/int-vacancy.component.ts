import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-int-vacancy',
  templateUrl: './int-vacancy.component.html',
  styleUrls: ['./int-vacancy.component.scss']
})
export class IntVacancyComponent {

  @Input() data;

  constructor() { }

}
