import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProfileInformationService } from './profile-information.service';
import { Generator } from '../../../shared/generator';
import * as $ from 'jquery';
//declare var Cropper:any;
import 'select2';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {
  profile : FormGroup;
  countries;
  selectedCountries;
  lang = ['Tamil', 'English', 'Arabic'];
  selectedCode = 1;
   Months : string[];
  Days   : number[];
  Years  : number[];
  birthModel = {day: undefined,month:undefined, year: undefined};
  birth  :{day:number,month:number,year:number}[] = [{day: undefined,month:undefined, year: undefined}];
  constructor(private _fb: FormBuilder,
              private _profileService: ProfileInformationService, 
              private _generator : Generator) 
 {
     this.Months = this._generator.generateMonth();
     this.Days   = this._generator.generatenumber(1,31);
     this.Years  = this._generator.generatenumber(1950,2017);
   }

  ngOnInit() {
   
  this._profileService.getCountries().subscribe(res=>{

   //get countries json file from server
     this.countries = JSON.parse(res['_body']);
        for(let obj of this.countries)
        {
            if(obj['name'] == 'IND')
            {
                this.selectedCountries = obj;
                this.selectedCode = obj['callingCodes'][0];
             }
  
         }
  this.profile.get('mobile.code').setValue(this.selectedCode);
   });

   //create Model Driven Forms for Profile Information Page
   this.profile = this._fb.group({
     firstName : [],
     lastName : [],
     gender  : [],
     email  : [],
     dob : this._fb.group({
        month           : ['', Validators.compose([Validators.required])],
        day             : ['', Validators.compose([Validators.required])],
        year            : ['', Validators.compose([Validators.required])]
     }),
     mobile : this._fb.group({
       country   : [],
       code   : [{value:'', disabled: true}],
       number   : [],

     }),
     profession : this._fb.group({
       industry : [],
       title    : [],
     }),
     languages : this._fb.group({
       proficientIn : [],
       familiarWith  : [],
     }),
     aboutMe : []
   })
  }
  getProfession(value){
    console.log(value);
    if(value.text == 'f'){
    this._profileService.getProfessionTitle(value.text).subscribe(res=>{
      console.log(res);
    });
    }
  }

  ngAfterViewInit(){
      
      $('.multi').select2({
       templateResult : this.format,
       templateSelection : this.format
     });
     $('.language_proficient').select2();
     $('.profession_title').select2({
       templateResult : this.getProfession
     })
    
  }

  format(option){
   
    if(!option.id){
      return option.text;
    }
    var option_image = $(option.element).data('image');
    
    if(!option_image){
      return option.text;
    }
    else{
       
      var $option = $('<span><img src="http://localhost:1337'+option_image+'">'+option.text+'</span>');
      return $option;
    }
  
  }

}
