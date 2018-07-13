import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DailyRoutineItemModel } from './int-daily-routine-item.model';

@Component({
  selector: 'app-int-daily-routine',
  templateUrl: './int-daily-routine.component.html',
  styleUrls: ['./int-daily-routine.component.scss'],
})
export class IntDailyRoutineComponent {

  routineData: Array<DailyRoutineItemModel>;
  defaultSectionBackgroundImgPath: SafeStyle;
  currentSectionBackgroundImgPath: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {

    this.defaultSectionBackgroundImgPath = sanitizer.bypassSecurityTrustStyle('url(assets/internalship/img/bg8_img1.jpg)');
    this.currentSectionBackgroundImgPath = this.defaultSectionBackgroundImgPath;

    this.routineData = [
      new DailyRoutineItemModel({
        active: true,
        index: 0,
        img: 'assets/internalship/img/bg8_img1.jpg',
        duration: '1-2 часа',
        description: 'Семинары с докладами друг другу пройденного материала (цель таких занятий: закрепить знания, научится общаться, распределять задачи, «повторение - мать учения», возможность проявить себя лидером)',
      }),
      new DailyRoutineItemModel({
        active: false,
        index: 1,
        img: 'assets/internalship/img/bg8_img2.jpg',
        duration: '3-4 часа',
        description: 'Устные лекции по темам, вопросы-ответы, самостоятельное изучение материалов по теме, видеоуроки и прочее.',
      }),
      new DailyRoutineItemModel({
        active: false,
        index: 2,
        img: 'assets/internalship/img/bg8_img3.jpg',
        duration: '2-3 часа',
        description: 'Решение задач, практические навыки работы с инструментами, моральная и методическая подготовка к собеседованиям, обучение вспомогательным навыкам: грамотная фиксация потраченного времени, общение с заказчиком, основам делового письма и т.п.',
      }),
    ];
  }

  setCurrentImg(imgPath: string) {
    if (imgPath === '') {
      this.currentSectionBackgroundImgPath = this.defaultSectionBackgroundImgPath;
    } else {
      this.currentSectionBackgroundImgPath = this.sanitizer.bypassSecurityTrustStyle(`url(${ imgPath })`);
    }
  }

  setDefaultImg(imgPath: string) {
    this.defaultSectionBackgroundImgPath = this.sanitizer.bypassSecurityTrustStyle(`url(${ imgPath })`);
  }

  setActiveLesson(index: number) {
    for (let item of this.routineData) {
      item.active = false;
    }
    this.routineData[index].active = true;
  }

}
