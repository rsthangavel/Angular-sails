import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as $ from 'jquery';
//declare var Cropper:any;
import 'select2';
@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {
  local_knowledge : FormGroup;
  locals : string[] = ['MANHATTAN','BROOKLYN','QUEENS'];
  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.local_knowledge = this._fb.group({
      city : [{value:"NEWYORK",disabled: true}],
      local_area : ['']
    })
  }
  formSubmit(value,valid){

  }
  ngAfterViewInit(){
     $('.local_area').select2();
  }

}
