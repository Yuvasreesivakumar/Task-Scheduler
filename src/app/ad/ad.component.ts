import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.css'
})
export class AdComponent {
  newTask: { studentId: string, task: string } = { studentId: '', task: '' };
  tasks: { studentId: string, task: string }[] = [];
  constructor(private taskService: TaskService) { }

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = { studentId: '', task: '' };

    this.tasks = this.taskService.getTasks();
  }
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
