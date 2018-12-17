import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Shake} from "@ionic-native/shake";

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {BackendProvider} from '../providers/backend/backend';

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        Shake,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        BackendProvider
    ]
})
export class AppModule {
}
