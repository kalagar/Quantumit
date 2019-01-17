import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentService } from './service/student.service';
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
  displayedColumns: string[] = [
    'studentName',
    'studentAge',
    'studentGPA',
    'edit',
    'delete'
  ];

  constructor(
    private route: ActivatedRoute,
    private _studentService: StudentService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.Title = params['className'];
      this.studentsList = this.getStudents(this.id);
      const maxGPA = _.maxBy(this.studentsList, 'GPA');
      this.maxGPA = maxGPA.id;
    });
  }

  getStudents(index: number) {
    return this._studentService.getStudents(index);
  }
}
