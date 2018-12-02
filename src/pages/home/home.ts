import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrackingPage } from '../tracking/tracking';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  pushPage: any;

  constructor(public navCtrl: NavController, private sqlite: SQLite) {
    this.pushPage = TrackingPage;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getData();
  }
  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS track(rowid INTEGER PRIMARY KEY, img TEXT, position TEXT, finished TEXT, type TEXT)')
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));      
    })
  }
}
