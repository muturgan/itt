import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../share/_animations/fade-in.animation';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [fadeInAnimation]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
