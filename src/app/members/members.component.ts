import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [TranslateService]
})
export class MembersComponent implements OnInit {

  constructor(private translate : TranslateService) {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        this.loadMembers();
        this.loadCategories();
        this.loadCountries();
        this.filterMembers();
      });
  }

  ngOnInit() {
    this.loadMembers();
    this.loadCategories();
    this.loadCountries();
  }

  public members: any;
  public catMembers = [];
  public filteredMembers = [];
  public cat: any;
  public countries: any;
  public category: string = "";
  public country: string = "";


  public loadMembers(){
    this.translate.get('members').subscribe(data => this.members = data);
  }

  public loadCategories(){
      this.translate.get('categories').subscribe(data => this.cat = data);
  }

  public loadCountries(){
      this.translate.get('countries').subscribe(data => this.countries = data);
  }

  public filterMembers() {
    this.loadMembers();
    this.catMembers = [];
    this.filteredMembers = [];
    document.getElementById('members').classList.add("loading");
    setTimeout(()=>{
      for (var i = 0; i < this.members.length; i++) {
      if (this.category == '' && this.country == '') {
        this.loadMembers();
      }
      if (this.category !== '') {
        if (this.members[i].category == this.category) {
          this.catMembers.push(this.members[i]);
        }
      } else {
        this.catMembers = this.members;
      }
    }

      for (var j = 0; j < this.catMembers.length; j++) {
        if (this.country !== '') {
          if (this.catMembers[j].country_key == this.country) {
            this.filteredMembers.push(this.catMembers[j])
          }
        } else {
          this.filteredMembers = this.catMembers;
        }
      }

      this.members = this.filteredMembers;
      document.getElementById('members').classList.remove("loading");
   }, 1000);


  }
}



