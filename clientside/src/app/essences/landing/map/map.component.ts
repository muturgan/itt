import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faFacebook, faVk } from '@fortawesome/free-brands-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  faFacebook = faFacebook;
  faVk = faVk;
  faPencilAlt = faPencilAlt;

  @Output() modalToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  showCallback() {
    this.modalToggle.emit(true);
  }
}
