import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.css']
})
export class HeaderProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 logout(){
   alert("Logout user");
 }
}
