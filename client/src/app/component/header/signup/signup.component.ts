import { Component, OnInit, ViewChild, ElementRef,NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { dobValidate } from '../../../shared/dob.validate';
import { comparePassword } from './passwordMatch.validate';
import { MapsAPILoader } from '@agm/core';
import { HeaderAuthService } from '../header-auth.service';
import { Generator } from '../../../shared/generator';
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
      firstName         : ['', Validators.compose([Validators.required])],
      lastName          : ['', Validators.compose([Validators.required])],
      email             : ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      cityOfResidence   : ['', Validators.compose([Validators.required])],
      password          : ['', Validators.compose([Validators.required])],
      cPassword         : ['', Validators.compose([Validators.required])],
      //Date of Birth formgroup
      dob : this._fb.group({
        month           : ['', Validators.compose([Validators.required])],
        day             : ['', Validators.compose([Validators.required])],
        year            : ['', Validators.compose([Validators.required])]
      }, {validator: dobValidate}),
      tc                : ['', Validators.required]
    },  {validator: comparePassword});

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
 
    if(valid)
    {
      console.log(value);
     
        this._headerservice.signup(value).subscribe(
          (data)=>{
             console.log(data);
         },
         (err)=>{
           console.log(err['_body']);
         });
    
    }
  }

  openSigninModal()
  {
    $("#signup").modal('hide');
    $("#signin").modal('show');
  }

}
