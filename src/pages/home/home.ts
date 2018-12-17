import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  socket: any;
  username: string;
  messages: [Message];
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.socket = io('https://smog.memelord.nl');

    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('username', (username: string) => {
      this.username = username;
    });

    this.socket.on('msg', (message: string, username: string) => {
      this.messages.push(new Message(username, message, false));
    });
  }

  sendBuzzer() {
    // TODO: fill method
  }

  sendMessage(message: string) {
    this.socket.emit('msg', message, this.username);
  }
}

class Message {
  username: string;
  message: string;
  sent: boolean;

  constructor(username: string, message: string, sent: boolean) {
    this.username = username;
    this.message = message;
    this.sent = sent;
  }
}
