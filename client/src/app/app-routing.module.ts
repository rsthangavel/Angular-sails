import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
//import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './header/signin/signin.component';
import { SignupComponent } from './header/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { RangeDirective } from './directive/range.directive';
import { InvalidMessageDirective } from './directive/invalidMessage.directive';
import { InvalidTypeDirective } from './directive/invalidType.directive';
import { AgmCoreModule } from '@agm/core';
import { HeaderAuthService } from './header/header-auth.service';
import { Generator } from './shared/generator';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path : 'profile', loadChildren : './component/profile-update/profile-update.routing.module#ProfileUpdateRoutingModule'}
]
@NgModule({
 declarations : [
   HomeComponent,
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
     RouterModule.forRoot(appRoutes)
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