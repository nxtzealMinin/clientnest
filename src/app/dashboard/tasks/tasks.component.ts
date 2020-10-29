import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../clients/add-client/add-client.component';
import { AddFollowupComponent } from '../clients/follow-up/add-followup/add-followup.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  name = 'Menino';

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  openAddClient(): void {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: '100%',
      maxWidth: '400px',
      data: {name: this.name} // you can pass data like this
    });

    // if you want to perform any functionalities after closing dialogue box, else you can remove this
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openAddFollowup(): void {
    const dialogRef = this.dialog.open(AddFollowupComponent, {
      width: '100%',
      maxWidth: '400px',
    });

    // if you want to perform any functionalities after closing dialogue box, else you can remove this
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
