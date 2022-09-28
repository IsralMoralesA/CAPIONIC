import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  form: FormGroup;
  constructor(
    private fb:FormBuilder,
    private barcodeScanner: BarcodeScanner,
    private alert:AlertController
    ) {
      this.form = this.fb.group({
        username: ["",Validators.required],
        password: ["",Validators.required]
      });
    }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  login(){
    console.log(this.form.value);
    console.log(this.form.valid);
  }

  Scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.ShowAlert(JSON.stringify(barcodeData));
     }).catch(err => {
         console.log('Error ocurrio...', err);
     });
  }

  ShowAlert(message: string){
    this.alert.create({message}).then(alertc=>{
      alertc.present();
    });
  }
}
