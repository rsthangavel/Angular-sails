import { Component, OnInit, ViewChild, ElementRef,NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { dobValidate } from '../../shared/dob.validate';
import { comparePassword } from './passwordMatch.validate';
import { MapsAPILoader } from '@agm/core';
import { HeaderAuthService } from '../header-auth.service';
import { Generator } from '../../shared/generator';
declare var google: any;
declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  register: FormGroup;
  DOB: FormGroup;
  Months : string[];
  Days   : number[];
  Years  : number[];
  birthModel = {day: undefined,month:undefined, year: undefined};
  birth  :{day:number,month:number,year:number}[] = [{day: undefined,month:undefined, year: undefined}];
  @ViewChild("search")
  public searchElementRef: ElementRef;
  error :any;
  success : any;


  constructor(
   private _fb:FormBuilder,
   private _headerservice: HeaderAuthService,
   private mapsAPILoader: MapsAPILoader,
   private ngZone: NgZone,
   private _generator: Generator) {
     this.Months = this._generator.generateMonth();
     this.Days   = this._generator.generatenumber(1,31);
     this.Years  = this._generator.generatenumber(1950,2017);
    }

  ngOnInit() {
  
   //create formgroup for usersignup
    this.register = this._fb.group({
      first_name        : ['', Validators.compose([Validators.required])],
      last_name         : ['', Validators.compose([Validators.required])],
      email             : ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      city_of_residence : ['', Validators.compose([Validators.required])],
      passwordGroup  : this._fb.group({
      password          : ['', Validators.compose([Validators.required])],
      confirm_password  : ['', Validators.compose([Validators.required])]
      },  {validator: comparePassword}),
      //Date of Birth formgroup
      dob : this._fb.group({
        month           : ['', Validators.compose([Validators.required])],
        day             : ['', Validators.compose([Validators.required])],
        year            : ['', Validators.compose([Validators.required])]
      }, {validator: dobValidate}),
      toc               : ['', Validators.compose([Validators.required, Validators.pattern('true')])]
    });

    //googelMap autocomplete for cityOfResidence
    this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {types: ['(cities)']});
          google.maps.event.addListener(autocomplete,"place_changed", () =>
           {
             this.ngZone.run(() =>{
             //get the place result
             let place = autocomplete.getPlace();
             //verify result
             if (place.geometry === undefined || place.geometry === null) 
             {
                return;
             }      
           });
         });
    });
  }

  //signup Form submit
  formSubmit(value,valid:boolean) : void  {
    console.log(value);
    this.error = '';
    if(valid)
    {
     
        this._headerservice.signup(value).subscribe(
          (data)=>{
             let val = JSON.parse(data['_body']);
             if(val.success === true){
               this.success = val;
             $("#signup").modal('hide');
             $('#thankyou').modal('show');
           
             }
         },
         (err)=>{
             this.error = JSON.parse(err['_body']);
         //  console.log(this.error.message['email'][0]);
         });
    
    }
  }

  openSigninModal()
  {
 
   //focusin login buttton when user click login in signup modal
   $('#signin').on("shown.bs.modal", function() {
       $('#login').focus();
    });
   $("#signup").modal('hide');
   $("#signin").modal('show');
  }

}
