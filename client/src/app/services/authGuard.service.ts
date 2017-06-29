import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AuthGuardService {
  private homeUrl = 'http://localhost:1337/';
  private _isLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public _is$:Observable<boolean> =this._isLoggedIn.asObservable();
  constructor(private _http: Http, private _router:Router) {
    _router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
      this.isLoggedIn().subscribe();
      }
    })
    }

  //check if token expires and refesh the token
  refreshToken(){}

 isLoggedIn(){
 
  const header =  new Headers();
      header.append('Content-Type', 'application/x-www-form-urlencoded');  
      return this._http.post(this.homeUrl+'auth',{},{withCredentials: true,headers: header})
      .map((res)=>{
        // this._isLoggedIn = res.json();
        this._isLoggedIn.next(res.json());
      return res.json();
    });
    
  

}
}

