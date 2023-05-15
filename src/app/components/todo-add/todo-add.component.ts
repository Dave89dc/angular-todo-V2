import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  newTodo: Todo = {title: '', description: '', priority: 1};

  constructor(private dataManagerServ: DataManagerService){}

  saveTodo(){
    this.dataManagerServ.addTodo({...this.newTodo});
  }

}
