import { Injectable } from "@angular/core";
import { Student } from "../student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [
    {
      id: 1,
      firstName: 'Foo',
      lastName: 'Bar',
      bio: 'foo bar baz'
    },
    {
      id: 2,
      firstName: 'Qux',
      lastName: 'Foo',
      bio: 'bar baz foo'
    },
  ];

  editStudent(student: Student) {
    for (const s of this.students) {
      if (student.id === s.id) {
        s.firstName = student.firstName;
        s.lastName = student.lastName;
        s.bio = student.bio;
        break;
      }
    }
  }
}