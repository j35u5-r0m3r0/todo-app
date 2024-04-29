import { Component, inject } from '@angular/core';

import { Task } from '../../interfaces/tasks.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  get tasks(): Array<Task> {
    return this.taskSrv.tasks;
  } 
  // otra forma de injectar un servicio en un componente
  //private tasksSrv = inject(TasksService);
  constructor(
    private taskSrv: TasksService
  ){}

  public onDeleteTask(id: string): void {
    //this.tasks.splice(index,1);
    this.taskSrv.deleteTask(id);
  }

  public onCompleteTask(id: string):void {
    //this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    this.taskSrv.completeTask(id);
  }

  public onNewTask(task: Task): void {
    //this.tasks.push(task);
    this.taskSrv.addTask(task);
  }

}
