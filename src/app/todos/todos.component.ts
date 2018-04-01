import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editMode = false;

  todo: Todo = {
    title: 'Fare pagamenti in banca',
    description: 'Andare in banca per pagare la luce, il gas e l\'affitto'
  };

}
