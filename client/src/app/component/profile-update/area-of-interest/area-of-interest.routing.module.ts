import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaOfInterestComponent } from './area-of-interest.component';
import { SelectCityComponent } from './select-city/select-city.component';
import { WriteupsListComponent } from './writeups-list/writeups-list.component';
import {SharedModule } from '../../../shared/shared.module';
const route : Routes = [

    {path: '', component:SelectCityComponent }
]
@NgModule({
    declarations : [
        AreaOfInterestComponent,
    SelectCityComponent,
    WriteupsListComponent,
    ],
    imports : [
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers : [
    ]
})
export class AreaOfInterestRoutingModule {

}