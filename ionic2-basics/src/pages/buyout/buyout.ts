import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
    this.name=this.navParams.data;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }
  goToRoot(){
    this.navCtrl.popToRoot();
  }

}
