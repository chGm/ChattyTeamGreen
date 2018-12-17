import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {
  constructor(public http: HttpClient) {
    console.log('Hello BackendProvider Provider');
  }

  sendBuzzer() {
    // TODO: fill method
  }

  sendMessage(message: string) {}
}
