import { Component } from '@angular/core';
import { IluminacionPage } from '../iluminacion/iluminacion'; 
import { NavController } from 'ionic-angular';
import { OficinaPage } from '../oficina/oficina';
import { MaquinariaPage } from '../maquinaria/maquinaria';
import { PasillosPage } from '../pasillos/pasillos';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	items = [
	'Iluminacion',
	'Oficina',
	'Maquinaria',
	'Pasillos'	
	];

	siguientePagina(item: string){

		if(item=="Iluminacion"){

			this.navCtrl.push(IluminacionPage);
		}

		if(item=="Oficina"){

			this.navCtrl.push(OficinaPage);
		
		}


		if(item=="Maquinaria"){

			this.navCtrl.push(MaquinariaPage);
		
		}

		if(item=="Pasillos"){

			this.navCtrl.push(PasillosPage);
		
		}



	}

 	constructor(public navCtrl: NavController) {

	}

}