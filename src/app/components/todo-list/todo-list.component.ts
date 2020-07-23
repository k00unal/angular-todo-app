import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  todoArray = [];
  todo;
  //todoForm: new FormGroup()

  addTodo(value) {
    if (value !== '') {
      this.todoArray.push(value);
      //console.log(this.todos)
    } else {
      alert('Field required **');
    }
  }

  /*delete item*/
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  // submit Form
  todoSubmit(value: any) {
    if (value !== '') {
      this.todoArray.push(value.todo);
      //this.todoForm.reset()
    } else {
      alert('Field required **');
    }
  }
}
