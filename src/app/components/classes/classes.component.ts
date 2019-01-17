import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = localStorage.getItem('SCHOOL');

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  displayedColumns: string[] = [
    'className',
    'location',
    'teacherName',
    'edit',
    'delete'
  ];
  dataSource = JSON.parse(ELEMENT_DATA);
  constructor() {}

  ngOnInit() {
  }
}
