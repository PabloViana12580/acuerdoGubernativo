import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PasillosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pasillos',
  templateUrl: 'pasillos.html',
})
export class PasillosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasillosPage');
  }

  seCumple(){
  	let data = {
  		numero: "26",
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
