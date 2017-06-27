import { CanActivate, ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuardService } from './authGuard.service';



@Injectable()
export class RouterGuardService implements CanActivate{
  constructor(private _auth: AuthGuardService, private _router:Router){}
canActivate(route: ActivatedRouteSnapshot): Observable<boolean>{
 
   
        return this._auth.isLoggedIn().map(
          (res) =>{
                  if(res.success == false){
                    this._router.navigateByUrl('');
                     
                      return false;
                  }
                  else{
                    return true;
                  }
          }
        )._catch((err) => {
           return Observable.of(false)});
          
      
       }
}

