import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdVerificationComponent } from './id-verification.component';
import {SharedModule } from '../../../shared/shared.module';
import { DropzoneModule } from 'angular2-dropzone-wrapper';
import { DropzoneConfigInterface } from 'angular2-dropzone-wrapper';
const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address: 
  server: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};
const route : Routes = [

    {path: '', component:IdVerificationComponent, }
]
@NgModule({
    declarations : [
        IdVerificationComponent,

    ],
    imports : [
        SharedModule,
        RouterModule.forChild(route),
         DropzoneModule.forRoot(DROPZONE_CONFIG)
    ],
    providers : [
    ]
})
export class IdVerificationRoutingModule {

}