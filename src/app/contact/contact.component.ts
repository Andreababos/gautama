import { Component, OnInit} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { ContentService } from '../content.service';
import "rxjs/Rx";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContentService]
})
export class ContactComponent implements OnInit {

  public contact : any;
  public msg : string = '';
  public name : string;
  public email : string;
  public subject : string;
  public message : string;
  public recaptcha : boolean = false;

  public constructor(private http: Http,
                     private contentService: ContentService) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  public onSubmit() {
    if (typeof(this.name) != 'undefined' && typeof(this.email) != 'undefined' &&  typeof(this.subject) != 'undefined' &&  typeof(this.message) != 'undefined' && this.recaptcha == true){
      this.contentService.sendEmail(this.name, this.email, this.subject, this.message).subscribe(data => this.msg = data);
      if (this.msg == 'OK'){
        $("form").trigger("reset");
        this.recaptcha = false;
      }
    } else{
      this.msg = 'MISSING'
    }
  }

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    if (captchaResponse !== null){
      this.recaptcha = true;
    }
}

}
