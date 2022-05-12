import { Component, Input } from '@angular/core';
import { StudentService } from '../home/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  editMode = false;
  @Input() student: Student|null = null;

  constructor(private studentService: StudentService) {}

  editFirstName(firstName: string) {
    const studentCopy = {...this.student} as Student;
    studentCopy.firstName = firstName;
    this.studentService.editStudent(studentCopy);
  }
}
