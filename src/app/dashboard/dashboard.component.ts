import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  opened = true;
  mode = 'side';
  innerWidth;
  comp = false;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.opened = false;
      this.mode = 'push';
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.opened = false;
      this.mode = 'push';
    } else {
      this.opened = true;
      this.mode = 'side';
    }
  }

}
