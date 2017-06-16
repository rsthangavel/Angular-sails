import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HeaderAuthService {
  private homeUrl = 'http://localhost:1337/';
   header = new Headers();
  constructor(private _http: Http) { 
        this.header.append('Accept', 'application/json');
       this.header.append('Content-Type', 'application/x-www-form-urlencoded'); 
  }

   signup(value)
   {  
        let signup_value = JSON.parse(JSON.stringify(value));
        signup_value.dateOfBirth = new Date(value.dob.year, value.dob.month, value.dob.day);
        delete signup_value.cPassword;
        delete signup_value.dob;
        delete signup_value.tc;
        //console.log(signup_value);
        
       let data = 'data='+btoa(JSON.stringify(signup_value));
       return this._http.post(this.homeUrl+'auth/signup' ,data, {headers : this.header})
       .map((res: Response)=> res)
       ._catch((error:Response)=>{
           return Observable.throw(error);
        });
   }
   signin(data)
   {
        
        return this._http.post(this.homeUrl+'auth/signin', data, {headers : this.header}).map((res: Response)=> res)
   }

}
