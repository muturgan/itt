import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../share/_animations/fade-in.animation';

@Component({
  selector: 'app-access-forbidden',
  templateUrl: './access-forbidden.component.html',
  styleUrls: ['./access-forbidden.component.scss'],
  animations: [fadeInAnimation]
})
export class AccessForbiddenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
