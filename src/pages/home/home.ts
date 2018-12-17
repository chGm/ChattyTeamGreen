import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as io from 'socket.io-client';
import {Shake} from "@ionic-native/shake";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    socket: any;
    username: string;
    messages: Message[] = [];
    myMessage: string;

    isBuzzing: boolean = false;

    constructor(public navCtrl: NavController, private shake: Shake) {
    }

    ionViewDidLoad() {
        this.setupSocket();

        const watch = this.shake.startWatch(60).subscribe(() => {
            this.socket.emit('buzzer');
            this.buzz();
        });
    }

    setupSocket() {
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

        this.socket.on('buzzer', () => {
            this.buzz();
        });
    }

    buzz() {
        this.isBuzzing = true;
        setTimeout(() => {
            this.isBuzzing = false;
        }, 1000);
    }

    sendMessage() {
        if (this.myMessage === '') return;
        this.socket.emit('msg', this.myMessage, this.username);
        this.messages.push(new Message(this.username, this.myMessage, true));
        this.myMessage = '';
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
