import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class AuthControlService {
  private homeUrl = '';

  constructor(private _http: Http) { }

  //check if token expires and refesh the token
  refreshToken(){}

}
