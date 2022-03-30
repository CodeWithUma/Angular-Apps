import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { 
    this.todos = [
      sno: 3,
      title: "This is title",
      desc: "Description",
      active: true
    ]
  }

  ngOnInit(): void {
  }

}
