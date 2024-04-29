import { Injectable } from '@angular/core';
import { Task } from '../interfaces/tasks.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  public tasks: Array<Task> = [
    {
      id: uuid(),
      description: "crear aplicación ToDo",
      isCompleted: true
    },
    {
      id: uuid(),
      description: "iniciaizar aplicación Todo",
      isCompleted: false
    },
    {
      id: uuid(),
      description: "crear módulo todo",
      isCompleted: false
    },
    {
      id: uuid(),
      description: "crear primer componente",
      isCompleted: false
    },
    {
      id: uuid(),
      description: "crear componentes secundarios",
      isCompleted: false
    },
    {
      id: uuid(),
      description: "finalizar aplicación",
      isCompleted: false
    },
  ];

  constructor() { }

  addTask (task: Task){
    const newTask: Task = { id: uuid(), ...task }
    this.tasks.push(newTask);
  }

  completeTask (id: string){
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  deleteTask (id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}
