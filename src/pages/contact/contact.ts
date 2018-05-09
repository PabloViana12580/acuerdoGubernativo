import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  letterObj = {
    de: '',
    para: '',
    cuerpo: ''
  }

  pdfObj = null;

  constructor(public navCtrl: NavController, private plt: Platform, private file: File, private fileOpener: FileOpener) {}

  createPdf() {
    var docDefinition = {
      content: [
        { text: 'REPORTE', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },
 
        { text: 'De', style: 'subheader' },
        { text: this.letterObj.de },
 
        { text: 'Para', style: 'subheader' },
        this.letterObj.para,
 
        { text: this.letterObj.cuerpo, style: 'story', margin: [0, 20, 0, 20] },
 
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }
 
  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

}
