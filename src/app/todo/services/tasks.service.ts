import { Injectable } from '@angular/core';
import { Task } from '../interfaces/tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
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

  constructor() { }

  addTask (task: Task){
    this.tasks.push(task);
  }

  completeTask (index: number){
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  deleteTask (index: number){
    this.tasks.splice(index,1);
  }

}
