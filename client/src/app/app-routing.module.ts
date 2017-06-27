import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
//import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './header/signin/signin.component';
import { SignupComponent } from './header/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './header/notification/notification.component';
import { ChatComponent } from './header/chat/chat.component';
import { HeaderProfileComponent } from './header/header-profile/header-profile.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderAuthService } from './header/header-auth.service';
import { Generator } from './shared/generator';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { RouterGuardService} from './services/routerGuard.service';
import { AuthGuardService } from './services/authGuard.service';
import { AuthResolver } from './resolve/auth.resolve';
const appRoutes : Routes = [
    {path: '', component: HomeComponent},
      {path : '', outlet: 'app-header', component: HeaderComponent, resolve: {isLoggedIn: AuthResolver}},
    {path : 'profile', loadChildren : './component/profile-update/profile-update.routing.module#ProfileUpdateRoutingModule', canActivate: [RouterGuardService]},
    
]
@NgModule({
 declarations : [
   HomeComponent,
   SigninComponent,
   SignupComponent,
   HeaderComponent,
   FooterComponent,
   NotificationComponent,
   ChatComponent,
   HeaderProfileComponent,
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
 providers : [ AuthGuardService,HeaderAuthService, Generator, RouterGuardService, AuthResolver],
})
export class AppRoutingModule{

}