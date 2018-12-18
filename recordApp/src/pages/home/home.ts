import { Component } from '@angular/core';
import { NavController, Platform, NavParams, AlertController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];
  filteredaudioList: any[] = [];
  adminName:string;
  userName:string;
  user:string;
  time:string;
  date:string;
  count: number = 0;

  constructor(public navCtrl: NavController, public navParams:NavParams, public alertCtrl:AlertController,
    private media: Media,
    private file: File,
    public platform: Platform) {
      this.adminName=this.navParams.get('admin');
    this.userName=this.navParams.get('user');
    }

  ionViewWillEnter() {
    this.getAudioList(this.userName);
  }
 

  
  getAudioList(name) {
    var filter: any = {userName: name};
   //localStorage.clear();
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      this.filteredaudioList = this.audioList;
      this.filteredaudioList=this.filteredaudioList.filter(function (item:any){
        for (var key in filter){
          if (item[key] === undefined || item[key] != filter[key]){
              return false;
          }
        }
        return true;
      });

      const alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle: "NONFILTERED: "+JSON.stringify(this.audioList)+"Filtered: "+JSON.stringify(this.filteredaudioList),
        buttons:['OK']
      });
      alert.present();
      console.log(this.audioList);
    }
  }

  startRecord() {
    var minutes = new Date().getMinutes().toString();
   this.count++;
    if(minutes.length==1){
      minutes="0"+minutes;
    }

    this.time=new Date().getHours()+":"+minutes;
    this.date=new Date().getDay()+"/"+new Date().getMonth()+"/"+new Date().getFullYear();

    if (this.platform.is('ios')) {
      this.fileName = this.userName+this.count+'.m4a';
      this.user=this.fileName.substring(0,this.userName.length);
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'asdrecord'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
  }
   
 

  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName, userName: this.userName,time:this.time, date:this.date };
    if(this.userName===data.userName){
    this.audioList.push(data);
    this.filteredaudioList.push(data);
    }
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList(data.userName);
  }

  playAudio(file,idx) {
    
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.play();
    this.audio.setVolume(0.8);
    
  
}

  stopAudio() {
    this.audio.stop();
  }
}
