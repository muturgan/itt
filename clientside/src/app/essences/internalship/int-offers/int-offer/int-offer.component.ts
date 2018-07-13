import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-int-offer',
  templateUrl: './int-offer.component.html',
  styleUrls: ['./int-offer.component.scss']
})
export class IntOfferComponent {

  @Input() grid: {
    col: string,
    img: string,
  };

  constructor() {
    console.log(`grid: ${this.grid}`);
  }

}
