import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvalidMessageDirective } from '../directive/invalidMessage.directive';
import { InvalidTypeDirective } from '../directive/invalidType.directive';

@NgModule({ 
    declarations : [
InvalidMessageDirective,
   InvalidTypeDirective,
    ] ,
    exports : [
        ReactiveFormsModule,
        CommonModule,
         InvalidMessageDirective,
   InvalidTypeDirective,
    ]
})
export class SharedModule{
    
}