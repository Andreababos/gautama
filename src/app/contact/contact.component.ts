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

  public constructor(private http: Http,
                     private contentService: ContentService) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  public onSubmit() {
    this.contentService.sendEmail(this.name, this.email, this.subject, this.message).subscribe(data => this.msg = data);
    $("form").trigger("reset");
  }
}
