import { Component, inject } from '@angular/core';

import { Task } from '../../interfaces/tasks.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  public tasks: Array<Task> = [
    {
      description: "crear aplicación ToDo",
      isCompleted: true
    },
    {
      description: "iniciaizar aplicación Todo",
      isCompleted: false
    },
    {
      description: "crear módulo todo",
      isCompleted: false
    },
    {
      description: "crear primer componente",
      isCompleted: false
    },
    {
      description: "crear componentes secundarios",
      isCompleted: false
    },
    {
      description: "finalizar aplicación",
      isCompleted: false
    },
  ];

  // otra forma de injectar un servicio en un componente
  //private tasksSrv = inject(TasksService);
  constructor(
    private taskSrv: TasksService
  ){}

  public onDeleteTask(index: number): void {
    this.tasks.splice(index,1);
  }

  public onCompleteTask(index: number):void {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  public onNewTask(task: Task): void {
    this.tasks.push(task);
  }

}
