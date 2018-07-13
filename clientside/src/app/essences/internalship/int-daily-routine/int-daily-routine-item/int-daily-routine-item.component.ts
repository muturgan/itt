import { Component, Input, Output, EventEmitter, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import { DailyRoutineItemModel } from '../int-daily-routine-item.model';

@Component({
  selector: 'app-int-daily-routine-item',
  templateUrl: './int-daily-routine-item.component.html',
  styleUrls: ['./int-daily-routine-item.component.scss']
})
export class IntDailyRoutineItemComponent implements AfterContentChecked {
  @ViewChild('lessonItem') lessonItem: ElementRef;

  @Input() lessonData: DailyRoutineItemModel;

  @Output() currentImgChanged = new EventEmitter<string>();
  @Output() defaultImgChanged = new EventEmitter<string>();
  @Output() activeLessonChanged = new EventEmitter<number>();

  constructor() {}

  ngAfterContentChecked() {
    if (this.lessonData.active === true) {
      this.lessonItem.nativeElement.classList.add('active');
    } else {
      this.lessonItem.nativeElement.classList.remove('active');
    }
  }

  showLessonImg(target: HTMLElement) {
    this.currentImgChanged.emit(
      target
        .closest('.bg8__item')
        .getAttribute('data-img')
    );
  }

  hideLessonImg() {
    this.currentImgChanged.emit('');
  }

  setDefaultSectionBackgroundImgPath(target: HTMLElement) {
    this.defaultImgChanged.emit(
      target
        .closest('.bg8__item')
        .getAttribute('data-img')
    );
  }

  setActiveLesson() {
    this.activeLessonChanged.emit(
      this.lessonItem.nativeElement.getAttribute('data-index')
    );
  }

}
