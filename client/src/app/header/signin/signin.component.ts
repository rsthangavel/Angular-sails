import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderAuthService } from '../header-auth.service';
declare var $:any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin : FormGroup;
  error: string;
  constructor(private _fb: FormBuilder,
  private _headerService: HeaderAuthService) { }

  ngOnInit() {
   
    this.signin = this._fb.group({
      email : ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      password : ['', Validators.compose([Validators.required])]
    })
  }
  formSubmit(value,valid){
    if(valid){
      this.error = '';
      this._headerService.signin(value).subscribe((data)=>{
        let result = JSON.parse(data['_body']);
        if(result.success === false){  
             this.error = result.message;
        }
        else{
          document.cookie = "key1="+result.message;
        }
      });
    }
  }

}
