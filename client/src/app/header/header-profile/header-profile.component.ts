import { Component, OnInit } from '@angular/core';
import { HeaderAuthService } from '../header-auth.service';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/authGuard.service';
@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.css']
})
export class HeaderProfileComponent implements OnInit {

  constructor(private _headerService: HeaderAuthService, private _router: Router, private _auth: AuthGuardService) { }

  ngOnInit() {
  }
 logout(){
  this._headerService.logout().subscribe((res)=>{
      this._router.navigate(['']);
        this._auth.isLoggedIn().subscribe();
  });

 }
}
