import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslateService]
})
export class AppComponent {

  public needed:boolean = true;


  constructor(translate: TranslateService) {
    translate.addLangs(["en", "sk"]);
    translate.setDefaultLang('en');
    translate.use('en');
    translate.onLangChange.subscribe((params: {lang: string, translations: any}) => {
      translate.use(params.lang);
    });
  }


  public removeAgeVerify(e){
    this.needed = e;
  }
}

