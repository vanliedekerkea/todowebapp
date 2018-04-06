import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  model = new Todo("Pulire il bagno", "Usare maestro lindo per pulire il bagno");
  submitted = false;

  onSubmit(theForm) {
    this.submitted = true;
    console.log("I have submitted the form");
  }

}
