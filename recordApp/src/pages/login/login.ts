import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AdminPage } from '../admin/admin';
import { UserPage } from '../user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }

  signIn(){
    if(this.password._value===''||this.user._value===''){
      const alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle:'Please check your username and password, and try again.',
        buttons:['OK']
      });
      alert.present();
    }
    else{
      var str=this.user._value;
      this.user._value=str.toLowerCase();
      //add validation with db
      if(this.user._value==='admin'&&this.password._value==='admin'){
        this.navCtrl.push(AdminPage,{
          data: this.user._value
        });
      }
      else{
        this.navCtrl.push(UserPage,{
          data: this.user._value
        });
      }
    }
  }

}
