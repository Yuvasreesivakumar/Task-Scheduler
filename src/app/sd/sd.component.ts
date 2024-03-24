import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styleUrls: ['./sd.component.css']
})
export class SdComponent implements OnInit {
  studentId: string = '';
  studentName: string = '';
  department: string = '';
  dateOfBirth: string = '';
  tasks: { studentId: string, task: string }[] = [];
  showProfileDetails: boolean = false;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.studentId = params.get('id') || '';
      this.route.queryParams.subscribe(queryParams => {
        this.studentName = queryParams['name'] || '';
        this.department = queryParams['department'] || '';
        this.dateOfBirth = queryParams['dob'] || '';
      });

      this.taskService.getTasksByStudentId(this.studentId).subscribe(tasks => {
        this.tasks = tasks;
      });
    });
  }

  markAsRead(studentId: string) {
    this.taskService.removeTaskByStudentId(studentId);
  }

  toggleProfileDetails() {
    this.showProfileDetails = !this.showProfileDetails;
  }
}



