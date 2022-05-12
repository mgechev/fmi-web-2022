import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private studentService: StudentService) {}

  get students() {
    return this.studentService.students;
  }
}
