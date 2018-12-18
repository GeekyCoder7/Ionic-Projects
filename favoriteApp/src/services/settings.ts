export class SettingsService{
    private altBackground = false;

    setBackground(isAlt:boolean){
        this.altBackground=isAlt;
    }
    
    isAltBackgtound(){
        return this.altBackground;
    }

}