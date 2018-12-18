import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  user:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user= navParams.get('data');
  }

  goToChatWith(adminName){
    //transfer adminName to chatPage
    console.log(this.user);
    this.navCtrl.push(HomePage,{
      admin: adminName,
      user: this.user
    });
  }
}
