import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUpdateComponent } from './profile-update.component';
import { AreaOfInterestComponent } from './area-of-interest/area-of-interest.component';
import { PricingComponent } from './pricing/pricing.component';
import { IdVerificationComponent } from './id-verification/id-verification.component';
import { ProfileUpdateNavigationComponent } from './profile-update-navigation/profile-update-navigation.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import {SharedModule } from '../../shared/shared.module';
import { ProfileInformationService } from './profile-information/profile-information.service';
const route : Routes = [

    {path: '', component:ProfileUpdateComponent, children:[
        {path: '', component: ProfileInformationComponent}
    ] }
]
@NgModule({
    declarations : [
        ProfileUpdateComponent,
        AreaOfInterestComponent,
        PricingComponent,
        IdVerificationComponent,
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