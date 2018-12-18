import { Quote } from "../data/quote.interface";

export class QuotesService{
    private favoriteQuotes:Quote[] =[];

    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
        return quoteEl.id==quote.id;
        });
        this.favoriteQuotes.splice(position,1);//remove an element from the array
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote:Quote){
        return this.favoriteQuotes.find((quoteEl:Quote)=>{
            return quoteEl.id==quote.id;
        });
    }

}