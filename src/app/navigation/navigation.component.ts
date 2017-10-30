import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-menu',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: []
})
export class NavigationComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  // @Output() onLangChange: EventEmitter<any> = new EventEmitter<any>();



  ngOnInit() {
  }


  // public pickLang(language: string):void {
  //   console.log(language);
  //   this.onLangChange.emit(language, "");
  // }

}
