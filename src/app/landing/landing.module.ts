import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { MaterialModule } from '../material.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    IvyCarouselModule
  ]
})
export class LandingModule { }
