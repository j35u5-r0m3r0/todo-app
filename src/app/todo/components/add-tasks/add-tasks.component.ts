import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/tasks.interface';

@Component({
  selector: 'todo-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTasksComponent {
  @Output()
  public onNewTask:EventEmitter<Task> = new EventEmitter();

  public task: Task = {
    description: '',
    isCompleted: false
  };

    emitTask(): void {
      if (this.task.description.length == 0) return; 
      this.onNewTask.emit(this.task);
      this.task = {
        description: '',
        isCompleted: false
      };
    }
}
