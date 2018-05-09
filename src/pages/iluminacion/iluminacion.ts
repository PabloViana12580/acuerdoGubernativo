import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the IluminacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iluminacion',
  templateUrl: 'iluminacion.html',
})
export class IluminacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IluminacionPage');
  }

  seCumple(){
  	let data = {
  		numero: "17",
  		texto: "Los lugares de trabajo deben contar con iluminación adecuada para la seguridad y conservación de la salud de los trabajadores. Cuando la iluminación natural no sea factible o suficiente, se debe proveer de luz artificial"
  	};

  	let actionSheet = this.actionSheetCtrl.create({
  		title: "¿Se cumple?",
  		buttons:[
  		{
  			text: "Acuerdo cumplido",
  			handler: () => {
  				this.navCtrl.push(HomePage, data);
  			}
  		},
  		{
  			text: "Cancelar",
  			role: "destructive",
  			handler: () => {
  				console.log("cancelar");
  			}
  		},

  		]
  	});
  	actionSheet.present();
  }



  

}
