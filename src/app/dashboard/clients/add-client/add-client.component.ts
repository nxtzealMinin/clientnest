import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientForm;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddClientComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.clientForm = this.fb.group({
      CLIENT_NAME : [this.data.name, Validators.required],
      CLIENT_EMAIL : ['', Validators.required, Validators.email],
      CLIENT_PHONE : ['', Validators.required],
      CLIENT_LOCATION : ['', Validators.required],
      PROJECT_TYPE : ['', Validators.required],
      PROJECT_VALUE : ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onAddClient() {

    // after validating form, close modal box with bellow code
    this.dialogRef.close();
  }

}
