import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentsList;
  Title: string;
  maxGPA;
  id: number;
  displayedColumns: string[] = ['studentName', 'studentAge', 'studentGPA', 'edit', 'delete'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.Title = params['className'];
      this.studentsList = this.getStudents(this.id);
    });
  }

  getStudents(index: number) {
    const classDetails = JSON.parse(localStorage.getItem('SCHOOL'));
    let studentsList = classDetails[index].students;
    studentsList = _.uniqBy(studentsList, 'name');
    const maxGPA = _.maxBy(studentsList, 'GPA');
    this.maxGPA = maxGPA.id;
    return studentsList;
  }

}
