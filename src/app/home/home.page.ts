import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, IonMenu, IonModal, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModaleFormPage } from '../modale-form/modale-form.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    @ViewChild(IonMenu) menu: IonMenu;
    menulist: string[] =[
      "tabs/form","tabs/messages","tabs/module-form"
    ];

  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  redirect(route:string) {
    this.menu.close();
    this.router.navigate([route]);
  }


}
