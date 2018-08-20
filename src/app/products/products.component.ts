import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [TranslateService]
})
export class ProductsComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        this.loadProducts();
      });
  }

  public products: Array<any> = [];

  ngOnInit() {
    this.loadProducts();
    window.scrollTo(0, 0);
  }

  public loadProducts(){
    this.translate.get('products').subscribe(data => this.products = data);
  }


  ngAfterViewInit(){
    $('#scrollspy').on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href');
      var element = $('div' + id);
      $('html, body').stop().animate({
        scrollTop: element.offset().top
      }, 1000);
    })
  }

}
