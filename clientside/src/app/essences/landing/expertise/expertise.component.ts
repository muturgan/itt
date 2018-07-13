import { Component, OnInit } from '@angular/core';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faSitemap, faUniversity, faMapMarker, faIndustry, faRobot, faCogs, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],

})
export class ExpertiseComponent implements OnInit {
  faBitcoin = faBitcoin;
  faCreditCard = faCreditCard;
  faSitemap = faSitemap;
  faUniversity = faUniversity;
  faMapMarker = faMapMarker;
  faCommentDots = faCommentDots;
  faIndustry = faIndustry;
  faRobot = faRobot;
  faCogs = faCogs;
  faHeartbeat = faHeartbeat;

  constructor() {}

  ngOnInit() {
  }

}
