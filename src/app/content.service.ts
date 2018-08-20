import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContentService {

  headers: Headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  });


  constructor(private http:Http){
  }


  public sendEmail(name, email, subject, message) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('name', name);
    params.set('email', email);
    params.set('subject', subject);
    params.set('message', message);
    return this.http.get('https://gautamamailserver.herokuapp.com/sendEmail', {search: params})
      .map(res => res.json().message)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errorMessage: string;

    errorMessage = error.message ? error.message : error.toString();

    console.log(errorMessage);
    // In real world application, call to log error to remote server
    // logError(error);

    // This returns another Observable for the observer to subscribe to
    return Observable.throw(errorMessage);
  }
}
