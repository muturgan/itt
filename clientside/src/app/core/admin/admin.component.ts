import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fadeInAnimation } from '../../share/_animations/fade-in.animation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [fadeInAnimation]
})
export class AdminComponent implements OnInit, OnDestroy {
  imagesBasic: Array<any>;
  bodySkin = 'mdb-skin';

  constructor(
    private http: HttpClient,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(document.body, this.bodySkin);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, this.bodySkin);
  }

}
