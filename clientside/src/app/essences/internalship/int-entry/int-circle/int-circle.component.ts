import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-int-circle',
  templateUrl: './int-circle.component.html',
  styleUrls: ['./int-circle.component.scss']
})
export class IntCircleComponent {

  @Input() circleData: {
    href: string,
    img: string,
    headerText: string,
    subheaderText?: string,
  };
  @Output() backgroundChanged = new EventEmitter<string>();

  constructor() {}

  changeBackground() {
    this.backgroundChanged.emit( this.circleData.img );
  }

}
