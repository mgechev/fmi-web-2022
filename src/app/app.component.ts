import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    {
      firstName: 'Foo',
      lastName: 'Bar',
      bio: 'foo bar baz'
    },
    {
      firstName: 'Qux',
      lastName: 'Foo',
      bio: 'bar baz foo'
    },
  ];
}
