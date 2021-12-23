import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(public toastController: ToastController) { }

  async presentToast(msg, type) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: type,
      position: 'bottom'
    });
    toast.present();
  }
}
