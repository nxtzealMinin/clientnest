import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

import { FollowUpRoutingModule } from './follow-up-routing.module';
import { FollowUpComponent } from './follow-up.component';
import { AddFollowupComponent } from './add-followup/add-followup.component';



@NgModule({
  declarations: [FollowUpComponent, AddFollowupComponent],
  imports: [
    CommonModule,
    FollowUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class FollowUpModule { }
