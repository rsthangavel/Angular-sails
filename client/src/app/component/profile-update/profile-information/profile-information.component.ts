import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileInformationService } from './profile-information.service';
import { ProfessionTitleAutocomplete } from './profession-title.autocomplete';
import { Generator } from '../../../shared/generator';
import * as $ from 'jquery';
import 'select2';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {
  profile : FormGroup;
    private profession_title: ProfessionTitleAutocomplete;
      private selValues: string[];
      items;
  countries;
  selectedCountries;
  lang = ['Tamil', 'English', 'Arabic'];
  selectedCode = 1;
    data;
   Months : string[];
  Days   : number[];
  Years  : number[];
  birthModel = {day: undefined,month:undefined, year: undefined};
  birth  :{day:number,month:number,year:number}[] = [{day: undefined,month:undefined, year: undefined}];
  constructor(private _fb: FormBuilder,
              private _activateRoute : ActivatedRoute,
              private _profileService: ProfileInformationService, 
              private _generator : Generator) 
 {
     this.Months = this._generator.generateMonth();
     this.Days   = this._generator.generatenumber(1,31);
     this.Years  = this._generator.generatenumber(1950,2017);
   }

  ngOnInit() {
    this.profession_title = new ProfessionTitleAutocomplete("#profession_title");
   //console.log(this._activateRoute.snapshot.data['profile_details']);
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
     first_name : ['', Validators.compose([Validators.required])],
     last_name :['', Validators.compose([Validators.required])],
     gender  : ['', Validators.compose([Validators.required])],
     email  : [{value:'test@email.com', disabled:true}, Validators.compose([Validators.required])],
     dob : this._fb.group({
        month           : ['', Validators.compose([Validators.required])],
        day             : ['', Validators.compose([Validators.required])],
        year            : ['', Validators.compose([Validators.required])]
     }),
     mobile : this._fb.group({
       country   : ['', Validators.compose([Validators.required])],
       code   : [{value:'', disabled: true}],
       number   : ['', Validators.compose([Validators.required])],
      
     }),
     profession : this._fb.group({
       industry : ['', Validators.compose([Validators.required])],
       title    : ['', Validators.compose([Validators.required])],
     }),
     languages : this._fb.group({
       proficientIn : ['', Validators.compose([Validators.required])],
       familiarWith  : ['', Validators.compose([Validators.required])],
     }),
     aboutMe : ['', Validators.compose([Validators.required])]
   })
  }


  ngAfterViewInit(){
       
      $('.multi').select2({
       templateResult : this.format,
       templateSelection : this.format
     });
     $('.language_proficient').select2();
     $('.multi').on('change',(e)=>{
        this.profile.get('mobile.code').setValue('+'+this.countries[$(e.target).val().slice(0,-8)].callingCodes[0]);
     });
    
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
  formSubmit(value, valid){
     console.log(value);
  }
  //   getProfession(){
     
  //   let key = $('.profession_title').data("select2").$dropdown.find("input").val();
  //   if($('.profession_title').data("select2").$dropdown.find("input").val().length> 1){
  //   this._profileService.getProfessionTitle(key).subscribe(res=>{
  //     console.log(res);
  //   });
  //   }
  // }

}
