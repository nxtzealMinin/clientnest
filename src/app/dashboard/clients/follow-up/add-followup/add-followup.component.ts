import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-followup',
  templateUrl: './add-followup.component.html',
  styleUrls: ['./add-followup.component.css']
})
export class AddFollowupComponent implements OnInit {
  followupForm;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddFollowupComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.followupForm = this.fb.group({
      FOLLOW_DATE: ['', Validators.required],
      FOLLOW_TIME: ['', Validators.required],
      CLIENT_NAME: ['', Validators.required],
      FOLLOW_DESC: ['', Validators.required],
      REMINDER_BEFORE: this.fb.group({
        TIME_1: [''],
        TIME_2: [''],
        TIME_3: ['']
      }),
      NOTIFY_VIA : this.fb.group({
        SMS: [''],
        EMAIL: ['']
      }),
      FOLLOW_STATUS: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  onAddClient() {

    // after validating form, close modal box with bellow code
    this.dialogRef.close();
  }
}
