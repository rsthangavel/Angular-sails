import { Directive, Input, OnInit, Renderer2, ElementRef} from '@angular/core';
import { FormGroupDirective, AbstractControl} from '@angular/forms';
import { Observable, Subscription} from 'rxjs';

@Directive({
  selector : '[invalidmessage]'
})
export class InvalidMessageDirective implements OnInit {
 @Input() invalidmessage : string;
 control : AbstractControl;
 controlValue$ : Observable<any>;
 hasSubmitted : boolean = false;
 controlSubscribtion : Subscription;
 constructor(private _fg: FormGroupDirective, private _render: Renderer2, private _el: ElementRef){
  
 }
 ngOnInit(){
   this.control = this.form.get(this.invalidmessage);
  let formSubmit$ = (<FormGroupDirective>this._fg).ngSubmit.map(()=>{this.hasSubmitted = true;  }).subscribe(()=>{this.setVisible()})
  this.controlValue$ =  Observable.merge(this.control.valueChanges, Observable.of(''));
  this.controlValue$.subscribe(res=>{
   this.setVisible();
  })
 }
  setVisible(){
   // console.log(this.control);
       //console.log(this._fg.form.get(this.invalidmessage).valid);
      if(this.control.invalid && (this.control.dirty || this.hasSubmitted)){
        this._render.removeStyle(this._el.nativeElement, 'display');
      }
      else{
        this._render.setStyle(this._el.nativeElement,'display', 'none');
      }
        
 }
 match(error: string){
    if (this.control && this.control.errors){
      if (Object.keys(this.control.errors).indexOf(error) > -1){
        return true;
      }
    }
    return false;
  }
 get form(){
   return  this._fg.formDirective ? (this._fg.formDirective as FormGroupDirective).form : null;
 }
}