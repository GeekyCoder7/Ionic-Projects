import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from './user/user';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
    constructor(private navCtrl: NavController){}

  onLoadUser(name:string){
      this.navCtrl.push(UserPage, name,{
        direction: 'forward',
        duration: 500,
        easing: 'ease-out'
      });
  }
  ionViewCanEnter(): boolean | Promise<boolean>{
    const rnd = Math.random();
    if(rnd>0.5){
      console.log("ionViewCanEnter");
    }
    else {
      console.log("can't enter");
    }
    
    
    return rnd>0.5;
  }  

}
