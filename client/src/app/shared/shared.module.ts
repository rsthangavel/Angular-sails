import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({  
    exports : [
        ReactiveFormsModule,
        CommonModule
    ]
})
export class SharedModule{
    
}