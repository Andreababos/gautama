import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-ageverifier',
  templateUrl: './ageverifier.component.html',
  styleUrls: ['./ageverifier.component.css']
})
export class AgeverifierComponent implements OnInit {

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public y1:number;
  public y2:number;
  public y3:number;
  public y4:number;
  public m1:number;
  public m2:number;
  public d1:number;
  public d2:number;
  public year:number;
  public month:number;
  public day:number;
  public today = new Date();
  public thisYear = this.today.getFullYear();
  public thisMonth = this.today.getMonth() + 1; //Months start from 0 -> January = 0
  public thisDay = this.today.getDate();

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.nextInput(".year");
    $("#year1").focus();
    $(".month").hide();
    $(".day").hide();
    if (document.cookie.indexOf('verified=') !== -1) {
      var self = this;
      setTimeout(function(){
        self.removeAgeVerify();
      },1);
    }
  }

    /*
     We get the values from the inputs and verify them
     */
    public verifyAge() {
      this.year = this.y1*1000 + this.y2*100 + this.y3*10 + this.y4*1;
      this.month = this.m1*10 + this.m2*1;
      this.day = this.d1*10 + this.d2*1;

      if (this.year < this.thisYear - 100 || this.month > 12 || this.day > this.daysInMonth(this.month, this.year)) {
        document.getElementById("enterText").innerHTML = "The date you entered appears to be invalid";
        $('#ageVerifier input').css('border-color', "crimson");

      }
      else if (this.thisYear - this.year < 18 || this.thisMonth - this.month < 0 || this.thisDay - this.day < 0) {
        document.getElementById("enterText").innerHTML = "You are not old enough to enter this site";
        $('#ageVerifier input').css('border-color', "crimson");
      }

      else if (this.thisYear - this.year == 18) {
        document.getElementById("enterText").innerHTML = "Please enter the month of your birth.";
        $(".month").show();
        this.nextInput(".month");
        $("#month1").focus();
        if (this.month < this.thisMonth && this.month > 0) {
          this.removeAgeVerify();
        } else if (this.month > this.thisMonth && this.month <= 12) {
          document.getElementById("enterText").innerHTML = "You are not old enough to enter this site";
        } else if (this.month - this.thisMonth == 0) {
          document.getElementById("enterText").innerHTML = "Please enter the day of your birth.";
          $(".day").show();
          this.nextInput(".day");
          $("#day1").focus();
          if (this.day <= this.thisDay && this.day > 0) {
            this.removeAgeVerify();
          } else if (this.day > this.thisDay && this.day <= this.daysInMonth(this.month, this.year)) {
            document.getElementById("enterText").innerHTML = "You are not old enough to enter this site";
            console.log(this.daysInMonth(this.month, this.year));
          }
        }
      }

      else if ((this.thisYear - this.year > 18) && (this.thisYear - this.year < 100)) {
        this.removeAgeVerify();
      }

    }

    /*
     This function makes the cursor move to the next input once you filled one, so the user won't need to click on each input box,
     they can just type their birth date without clicking anywhere.
     */
  public nextInput(className) {
    var self = this;
      $(className).keyup(function (e) {
        if (this.value.length == this.maxLength) {
          let $next = $(this).next(className);
          if ($next.length) {
            $(this).next(className).focus();
          } else {
            self.verifyAge();
          }
        }
        if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37) {
          let $prev = $(this).prev('input');
          if ($prev.length) {
            $(this).prev('input').val('').focus();
          } else {
            //$(this).parent().prev().children().last('input').val('').focus();
          }
          $('#ageVerifier input').css('border-color', "black");
          let ymd = className.slice(1);
          document.getElementById("enterText").innerHTML = "Please enter the " + ymd + " of your birth.";
        }
        if (e.keyCode == 39) {
          let $next = $(this).next(className);
          if ($next.length) {
            $(this).next(className).focus();
          }
        }
      });
    }

    public daysInMonth(m, y) {
      return new Date(y, m, 0).getDate();
    }

    public removeAgeVerify() {
      this.remove.emit(false);
      this.setCookie();
      $(".agVer").addClass("hidden");
    }

    public setCookie() {
      let date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      let dateString = date.toUTCString();
      document.cookie = "verified = true; expires=" + dateString + "; path=/";
    }

}
