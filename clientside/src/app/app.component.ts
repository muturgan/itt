import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { ScrollService } from './share/_services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(PerfectScrollbarComponent)scroll: PerfectScrollbarComponent;

  constructor (private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.scrollService.directiveScroll = this.scroll.directiveRef;
  }

  handleScroll() {
    this.scrollService.position.emit(this.scroll.directiveRef.position(true));
  }
}
