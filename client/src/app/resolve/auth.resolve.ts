import {  Resolve , ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthGuardService } from '../services/authGuard.service';

@Injectable()
export class AuthResolver implements Resolve<any>{
    constructor(private _auth: AuthGuardService){}
    resolve(route: ActivatedRouteSnapshot) :Observable<any>{
            return this._auth.isLoggedIn()//.delay(3000);
    }
   
}