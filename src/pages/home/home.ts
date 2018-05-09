import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

interface Acuerdo{
	numero: "Number";
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  acu = [] as Acuerdo[];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad(){
 	let num = this.navParams.get("numero");
 	console.log(num);

 	this.acu.push({numero: num})
  }

}
