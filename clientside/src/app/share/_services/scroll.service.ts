import {EventEmitter, Injectable} from '@angular/core';
import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Injectable()
export class ScrollService {
  position: EventEmitter<any> = new EventEmitter();
  directiveScroll: PerfectScrollbarDirective;
}
