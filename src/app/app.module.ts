import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AgregarPage } from '../pages/agregar/agregar';
import { TabsPage } from '../pages/tabs/tabs';
import { GruposPage} from '../pages/grupos/grupos';
import { IluminacionPage } from '../pages/iluminacion/iluminacion';
import { OficinaPage } from '../pages/oficina/oficina';
import { MaquinariaPage } from '../pages/maquinaria/maquinaria';
import { PasillosPage } from '../pages/pasillos/pasillos';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GruposPage,
    IluminacionPage,
    OficinaPage,
    MaquinariaPage,
    PasillosPage,
    AgregarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GruposPage,
    IluminacionPage,
    OficinaPage,
    MaquinariaPage,
    PasillosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileOpener
  ]
})
export class AppModule {}
