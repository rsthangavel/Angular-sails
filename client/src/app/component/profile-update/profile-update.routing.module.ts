import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUpdateComponent } from './profile-update.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileUpdateNavigationComponent } from './profile-update-navigation/profile-update-navigation.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import {SharedModule } from '../../shared/shared.module';
import { ProfileInformationService } from './profile-information/profile-information.service';
const route : Routes = [

    {path: '', component:ProfileUpdateComponent, children:[
        {path: '', component: ProfileInformationComponent, resolve:{profile_details: ProfileInformationService}   },
        {path: 'area', loadChildren : './area-of-interest/area-of-interest.routing.module#AreaOfInterestRoutingModule'},
        {path: 'price', component: PricingComponent},
        {path: 'id', loadChildren : './id-verification/id-verification.routing.module#IdVerificationRoutingModule'}
    ] }
]
@NgModule({
    declarations : [
        ProfileUpdateComponent,
        PricingComponent,
        ProfileUpdateNavigationComponent,
        ProfileInformationComponent,

    ],
    imports : [
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers : [
ProfileInformationService
    ]
})
export class ProfileUpdateRoutingModule {

}