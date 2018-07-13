import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-int-offers',
  templateUrl: './int-offers.component.html',
  styleUrls: ['./int-offers.component.scss']
})
export class IntOffersComponent implements OnInit {
  grid: Array<{
    col: string,
    img: string,
  }>;

  constructor() {}

  ngOnInit() {
    this.grid = [
      {
        col: '2',
        img: '1',
      },
      {
        col: '1',
        img: '2',
      },
      {
        col: '2',
        img: '3',
      },
      {
        col: '3',
        img: '4',
      },
      {
        col: '1',
        img: '5',
      },
      {
        col: '2',
        img: '6',
      },
    ];
  }

}
