import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { TodoComponent } from './components/todo/todo.component';
import { ListComponent } from './components/list/list.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

@NgModule({
    declarations: [
    TodoComponent,
    ListComponent,
    AddTasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoComponent
  ]
})
export class Todomodule { }