import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent {
  s: any = {};
  Dept = ['Bio Maths', 'Biology', 'Commerce', 'Computer Science'];

  age: any | undefined;
  studentId: string ='' ;

  constructor(private router: Router) {}


  onSubmit() {
    console.log('Form submitted:', this.s);
    this.router.navigate(['/student', this.studentId], { queryParams: { name: this.s.name, department: this.s.department , date:this.s.dob } });
  }
}
