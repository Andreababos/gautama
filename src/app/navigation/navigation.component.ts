import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: []
})
export class NavigationComponent implements OnInit {

  constructor(public translate: TranslateService) {

  }

  // @Output() onLangChange: EventEmitter<any> = new EventEmitter<any>();
  


  ngOnInit() {
    $('.navbar-collapse a').click( function (){
      (<any>$('.navbar-collapse')).collapse('hide')
    })
  }


  // public pickLang(language: string):void {
  //   console.log(language);
  //   this.onLangChange.emit(language, "");
  // }

}
