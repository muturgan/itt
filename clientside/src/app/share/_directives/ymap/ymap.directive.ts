import {Directive, ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[yaMap]'
})
export class YmapDirective implements OnInit {

  constructor( private el: ElementRef, private renderer: Renderer2 ) {}

  script(url) {
    if (Array.isArray(url)) {
      const self = this;
      const prom = [];
      url.forEach(function (item) {
        prom.push(self.script(item));
      });
      return Promise.all(prom);
    }

    return new Promise(function (resolve, reject) {
      let r = false;
      const t = document.getElementsByTagName('script')[0];
      const s = document.createElement('script');

      s.type = 'text/javascript';
      s.src = url;
      s.async = true;
      s.onload = function () {
        r = true;
        resolve(this);
      };
      s.onerror = s.onabort = reject;
      t.parentNode.insertBefore(s, t);
    });
  }

  ngOnInit() {
    this.script('//api-maps.yandex.ru/2.1/?lang=ru_RU').then(() => {
      const ymaps = window['ymaps'];
      ymaps.ready(init);
      let myMap;

      function init() {
        myMap = new ymaps.Map('map__area', {
          center: [54.190370, 37.618324],
          controls: [],
          zoom: 17,
        });
        myMap.behaviors.disable('scrollZoom');

        const myPlacemark = new ymaps.Placemark([54.190140, 37.6188], {
          balloonContent: '<img alt="IT TEST" src="https://ittest-tula.ru/wp-content/uploads/2016/07/IT_TEST_LOGO90px.png" width="100">'
        }, {
          preset: 'islands#yellowStretchyIcon',
          // Отключаем кнопку закрытия балуна.
          balloonCloseButton: false,
          // Балун будем открывать и закрывать кликом по иконке метки.
          hideIconOnBalloonOpen: false
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.balloon.open(
          [54.190140, 37.6188], {
            contentBody: '<img alt="IT TEST" src="https://ittest-tula.ru/wp-content/uploads/2016/07/IT_TEST_LOGO90px.png" width="100">'
          }, {
            closeButton: false
          });

        // myPlacemark.balloon.open();
      }
    });
  }

}
