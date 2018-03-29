import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../list/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}