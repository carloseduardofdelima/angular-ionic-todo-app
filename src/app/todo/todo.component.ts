import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  bgColor = 'crimson';
  @Input() todoName: string;
  @Input() todoDesc: string;
  @Input() checked: string;

  
  todoList = []

  constructor() { }

  ngOnInit() {}

}
