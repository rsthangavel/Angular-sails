import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProfileInformationService implements Resolve<any>{
    constructor(private _http:Http){}
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
         return this._http.get('http://localhost:1337/profileinformation/getprofileDetails').map(res=> res);
    }
    getCountries(){
       return this._http.get('http://localhost:1337/profileinformation/getCountries').map(res=> res);
       
    }
    getProfessionTitle(data){
       
       return  this._http.get('https://suggest.naukri.com/suggest/autosuggest?query='+data+'&appId=103&vertical=&category=top,rs&limit=15&sourceId=3000&version=1.0.2&_=1497529025008').map(res=>res);
    }
}