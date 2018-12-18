import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(){
    if(this.password._value===''||this.user._value===''){
      const alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle:'Please check your username and password, and try again.',
        buttons:['OK']
      });
      alert.present();
    }
    else{
      const alert1 = this.alertCtrl.create({
        title: 'Congrats',
        subTitle:'Your account is created successfully.',
        buttons:[{
          text:'OK',
          handler:() => {
            
                this.navCtrl.popToRoot();
            
          }
        }]
      });
      alert1.present().then();
      //add user into db
      
    }
  }
  goToLogin(){
  this.navCtrl.pop();
  }

}
