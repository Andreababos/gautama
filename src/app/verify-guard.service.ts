import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class VerifyGuardService implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    if (document.cookie.indexOf('verified=') == -1) {
        this.router.navigate(['verify']);
        return false;
      }
    return true;
  }

}