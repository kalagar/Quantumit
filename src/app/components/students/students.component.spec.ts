import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatButtonModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent],
      imports: [MatTableModule, MatButtonModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have load Student Component', () => {
    expect(component).toBeDefined();
  });

  it('should have load student list', () => {
    const result = component.getStudents(0);
    expect(result.length > 0);
  });
});
