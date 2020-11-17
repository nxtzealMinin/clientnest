import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  innerWidth;
  numOfCells;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.numOfCells = 1;
    } else {
      this.numOfCells = 3;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.numOfCells = 1;
    } else {
      this.numOfCells = 3;
    }
  }
}
