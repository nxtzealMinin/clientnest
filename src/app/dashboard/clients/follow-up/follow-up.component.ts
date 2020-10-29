import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';
import { AddFollowupComponent } from './add-followup/add-followup.component';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent implements OnInit, AfterViewInit  {
  name = 'minin';
  displayedColumns: string[] = ['select', 'date', 'status', 'comment', 'actions'];
  dataSource = new MatTableDataSource<FollowupElement>(ELEMENT_DATA);
  selection = new SelectionModel<FollowupElement>(true, []);
  deletesected = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    (numSelected > 0) ? this.deletesected = true : this.deletesected = false;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: FollowupElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.date + 1}`;
  }

  toggleRow(row) {
    this.selection.toggle(row);
    const numSelected = this.selection.selected.length;
    (numSelected > 0) ? this.deletesected = true : this.deletesected = false;
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


export interface FollowupElement {
  date: string;
  status: string;
  comment: string;
}

const ELEMENT_DATA: FollowupElement[] = [
  {date: '1/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '2/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '3/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '4/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '5/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '6/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '7/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '8/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '9/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {date: '10/09/2020', status: 'Processing', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
];
