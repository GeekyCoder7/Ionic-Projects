import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
//import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';
import { SettingsService } from '../../services/settings';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService){
  }
  onToggle(toggle: Toggle){
    this.settingsService.setBackground(toggle.checked);
  }
  checkAltBackground(){
    return this.settingsService.isAltBackgtound();
  }
}
