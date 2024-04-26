import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
    declarations: [
    TodoComponent
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