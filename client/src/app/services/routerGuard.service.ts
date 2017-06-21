import { CanActivate, ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuardService } from './authGuard.service';


@Injectable()
export class RouterGuardService implements CanActivate{
     private can:boolean = false;
  test;
  error;
  constructor(private _auth: AuthGuardService, private _router:Router){}
canActivate(route: ActivatedRouteSnapshot): Observable<boolean>{
   if(localStorage.getItem('user_token')){
        return this._auth.isLoggedIn().map(
          (res) =>{
            this.test = res.json();
            console.log(this.test);
               if(this.test.token){
                
                    localStorage.setItem('user_token', this.test.token); 
                      return true;                     
               }
               else{
                // throw new Error('Invalid');
                   this._router.navigate(['']);
                   return false;
              }
          }
        )._catch((err) => {
          //console.log(err); 
          //this.error = err.json();
          //console.log(this.error);
          //console.log(this.error.message);
          localStorage.clear();
          //localStorage.setItem('error',JSON.stringify({message:this.error.message}));
          this._router.navigate(['']);
           return Observable.of(false)});
      
       }
       else{
           this._router.navigate(['']);
       }
}

}