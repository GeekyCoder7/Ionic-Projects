import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
quotes:Quote[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private quotesService: QuotesService,
     private modalCtrl:ModalController,
     private settingsService: SettingsService) {
       //this.onViewQuote=this.onViewQuote.bind(this);
  }

  ionViewWillEnter() {
   this.quotes=this.quotesService.getFavoriteQuotes();
  }
  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
      this.onRemoveFromFavorites(quote);
      /*const position = this.quotes.findIndex((quoteEl: Quote) => {
        return quoteEl.id==quote.id;
      });
      this.quotes.splice(position,1);*/
      }
    });
  }
 onRemoveFromFavorites(quote:Quote){
  this.quotesService.removeQuoteFromFavorites(quote);
  this.quotes = this.quotesService.getFavoriteQuotes();
 }

 getBackground(){
  return this.settingsService.isAltBackgtound()? 'altQuoteBackground' : 'quoteBackground';
 }
}
