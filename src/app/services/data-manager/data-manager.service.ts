import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        title: 'Regalo alla nonna',
        description: 'Compra il profumo che le piace tanto',
        priority: 3
      },
      {
        title: 'Compra il pane',
        priority: 1
      }
    ];
  }

  addTodo(newTodo: Todo){
    this.todos.push(newTodo);
  }

  deleteTodo(todoToDelete: Todo){
    console.log('Devo cancelare: ', todoToDelete.title);
    this.todos = this.todos.filter(todo => todo.title !== todoToDelete.title);
  }

}
