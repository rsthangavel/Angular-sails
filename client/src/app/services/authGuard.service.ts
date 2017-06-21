import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class AuthGuardService {
  private homeUrl = 'http://localhost:1337/';
  
  constructor(private _http: Http) { }

  //check if token expires and refesh the token
  refreshToken(){}

 isLoggedIn(){
    let token = localStorage.getItem('user_token');
   
  
  
  const header =  new Headers();
      header.append('Content-Type', 'application/x-www-form-urlencoded'); 
   header.append('Authorization', token);
   return this._http.post(this.homeUrl+'auth/refresh_token',{},{headers: header});

   
}
}

