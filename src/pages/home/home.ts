import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrackingPage } from '../tracking/tracking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  pushPage: any;

  constructor(public navCtrl: NavController) {
    this.pushPage = TrackingPage;
  }

}
