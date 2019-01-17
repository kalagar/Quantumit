import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() {}

  getStudents(index: number) {
    const classDetails = JSON.parse(localStorage.getItem('SCHOOL'));
    let studentsList = classDetails[index].students;
    studentsList = _.uniqBy(studentsList, 'name');
    console.log('QWEQWE ===>>> ', studentsList);
    return studentsList;
  }
}
