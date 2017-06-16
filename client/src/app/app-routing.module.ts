import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
//import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './component/header/signin/signin.component';
import { SignupComponent } from './component/header/signup/signup.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
//import { RangeDirective } from './directive/range.directive';
import { InvalidMessageDirective } from './directive/invalidMessage.directive';
import { InvalidTypeDirective } from './directive/invalidType.directive';
import { AgmCoreModule } from '@agm/core';
import { HeaderAuthService } from './component/header/header-auth.service';
import { Generator } from './shared/generator';
import { IndexComponent } from './index/index.component';
import {SharedModule } from './shared/shared.module';
const route : Routes = [
    {path: '', component: IndexComponent},
    {path : 'profile', loadChildren : './component/profile-update/profile-update.routing.module#ProfileUpdateRoutingModule'}
]
@NgModule({
 declarations : [
   IndexComponent,
   SigninComponent,
   SignupComponent,
   HeaderComponent,
   FooterComponent,
   //RangeDirective,
   InvalidMessageDirective,
   InvalidTypeDirective,
 
 ],
 imports : [
       SharedModule,
       AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZNzpzEEErw0svrxcdEKa3mfCeioNqo6A',
      libraries : ['places']
    }),
     RouterModule.forRoot(route)
 ], 
 exports: [
   RouterModule,
   HeaderComponent,
   FooterComponent
 ],
 providers : [HeaderAuthService, Generator],
})
export class AppRoutingModule{

}