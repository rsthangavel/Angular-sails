import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from  '../../environments/environment';
@Injectable()
export class HeaderAuthService {
  private homeUrl = environment.apiUrl;
   header = new Headers();
  constructor(private _http: Http) { 
        this.header.append('Accept', 'application/json');
       this.header.append('Content-Type', 'application/x-www-form-urlencoded'); 
  }

   signup(value)
   {  
        //copy one object to another object -- pass by value 
        let signup_value = JSON.parse(JSON.stringify(value));
        signup_value.date_of_birth = new Date(value.dob.year, value.dob.month, value.dob.day);
        signup_value.password = value.passwordGroup.password;
        delete signup_value.passwordGroup;
        delete signup_value.dob;
        let data = 'data='+btoa(JSON.stringify(signup_value));
        return this._http.post(this.homeUrl+'auth/signup' ,data, {headers : this.header})
        .map((res: Response)=> res)
        ._catch((error:Response)=>{
        return Observable.throw(error);
        });
   }
   signin(value)
   {
         let data = 'data='+btoa(JSON.stringify(value));
        return this._http.post(this.homeUrl+'auth/signin', data, {headers : this.header})
        .map((res: Response)=> res)
        ._catch((error:Response)=> {
          return Observable.throw(error);
        })
   }

}
