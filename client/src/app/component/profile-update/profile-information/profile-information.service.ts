import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileInformationService{
    constructor(private _http:Http){}
    getCountries(){
       return this._http.get('http://localhost:1337/profileinformation/getCountries').map(res=> res);
       
    }
    getProfessionTitle(data){
       return  this._http.get('https://suggest.naukri.com/suggest/autosuggest?query='+data+'&appId=103&vertical=&category=top,rs&limit=15&sourceId=3000&version=1.0.2&_=1497529025008').map(res=>res);
    }
}