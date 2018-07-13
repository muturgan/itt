import { Component, Input } from '@angular/core';
import { ExpectationModel } from '../expectation.model';

@Component({
  selector: 'app-int-expectations-item',
  templateUrl: './int-expectations-item.component.html',
  styleUrls: ['./int-expectations-item.component.scss']
})
export class IntExpectationsItemComponent {
  @Input() expectationData: ExpectationModel;

  constructor() {}

}
