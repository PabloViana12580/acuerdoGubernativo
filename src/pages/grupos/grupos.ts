import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';

interface Companero{
	nombre: "text";
	apellido: "text";
	sexo: "text";
	correo: "text";
	puesto: "text";
	numero: "Number";

}

@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html'
})

export class GruposPage {

  compas = [] as Companero[];

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  	
  }

  ionViewDidLoad(){
  	let name = this.navParams.get("nombre");
  	let ape = this.navParams.get("apellido");
  	let sexo = this.navParams.get("sexo");
  	let correo = this.navParams.get("correo");
  	let puesto = this.navParams.get("puesto");
  	let numero = this.navParams.get("numero");


  	this.compas.push({nombre: name, apellido: ape, sexo: sexo, correo: correo, puesto: puesto, numero: numero })
  }

  cambiarPagina(){
  	this.navCtrl.push(AgregarPage);
  }

}
