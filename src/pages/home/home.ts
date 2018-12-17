import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  socket: any;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
      this.socket = io("https://smog.memelord.nl");

      this.socket.on('connect', () => {
        console.log("connected");
      })
  }
}
