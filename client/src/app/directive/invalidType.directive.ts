import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { InvalidMessageDirective } from './invalidMessage.directive';
 
@Directive({
  selector : '[invalidtype]'
})
 export class InvalidTypeDirective implements OnInit{
  @Input('invalidtype') type : string;
  private hasView = false;
  constructor(private invalidmessage: InvalidMessageDirective, private _temp: TemplateRef<any>, private _view:ViewContainerRef){

  }
  ngOnInit(){
   this.invalidmessage.controlValue$.subscribe(()=>{
    
      this.setVisible();
   })
  }
  private setVisible() {
    
    if (this.invalidmessage.match(this.type)){
      if (!this.hasView) {
        this._view.createEmbeddedView(this._temp);
        this.hasView = true;
      }
    }else {
      if (this.hasView) {
         this._view.clear();
         this.hasView = false;
      }
    }
  }

 }