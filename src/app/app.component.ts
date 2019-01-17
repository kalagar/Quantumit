import { Component } from '@angular/core';


const SCHOOL = [
  {
    'id': 0,
    'className': 'Biology',
    'location': 'Building 5 Room 201',
    'teacherName': 'Mr Robertson',
    'students': [
      {
        'id': 1,
        'name': 'David Jackson',
        'age': 19,
        'GPA': 3.4
      },
      {
        'id': 2,
        'name': 'David Jackson',
        'age': 19,
        'GPA': 3.4
      },
      {
        'id': 3,
        'name': 'Peter Parker',
        'age': 18,
        'GPA': 2.9
      },
      {
        'id': 4,
        'name': 'Robert Smith',
        'age': 20,
        'GPA': 3.1
      },
      {
        'id': 5,
        'name': 'Rebecca Black',
        'age': 21,
        'GPA': 4.1
      }
    ]
  },
  {
    'id': 1,
    'className': 'English',
    'location': 'Building 3 Room 134',
    'teacherName': 'Mss Sanderson',
    'students': [
      {
        'id': 2,
        'name': 'David Jackson',
        'age': 19,
        'GPA': 3.4
      },
      {
        'id': 3,
        'name': 'David Jackson',
        'age': 19,
        'GPA': 3.4
      },
      {
        'id': 4,
        'name': 'Peter Parker',
        'age': 21,
        'GPA': 2.9
      },
      {
        'id': 5,
        'name': 'Rebeca Black',
        'age': 18,
        'GPA': 2.1
      }
    ]
  }
];

localStorage.setItem('SCHOOL', JSON.stringify(SCHOOL));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quantumit';
}
