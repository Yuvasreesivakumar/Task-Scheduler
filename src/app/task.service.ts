import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject: BehaviorSubject<{ studentId: string, task: string }[]> = new BehaviorSubject<{ studentId: string, task: string }[]>([]);
  public tasks$: Observable<{ studentId: string, task: string }[]> = this.tasksSubject.asObservable();

  constructor() { }

  addTask(task: { studentId: string, task: string }) {
    const tasks = this.tasksSubject.value;
    tasks.push(task);
    this.tasksSubject.next(tasks);
  }

  removeTaskByStudentId(studentId: string) {
    const tasks = this.tasksSubject.value.filter(task => task.studentId !== studentId);
    this.tasksSubject.next(tasks);
  }

  getTasks(): { studentId: string; task: string; }[] {
    return this.tasksSubject.value;
  }

  getTasksByStudentId(studentId: string): Observable<{ studentId: string, task: string }[]> {
    return this.tasks$.pipe(
      map((tasks: any[]) => tasks.filter(task => task.studentId === studentId))
    );
  }
}
