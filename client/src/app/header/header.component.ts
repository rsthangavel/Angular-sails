import { Component, OnInit, OnChanges } from '@angular/core';
import { HeaderAuthService } from './header-auth.service';

import { AuthGuardService } from '../services/authGuard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn :boolean =  false;
  constructor( private _headerService : HeaderAuthService, private _guard: AuthGuardService) {
      
   }
  ngOnInit() {
  
    this._guard._is$.subscribe((data)=>{
        this.isLoggedIn = data['success'];
      console.log(data);
    });
  }
}
