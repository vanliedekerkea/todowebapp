import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  form: FormGroup;
  model: Todo;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.model = new Todo("Pulire il bagno", "Usare maestro lindo per pulire il bagno");
    this.form = this.formBuilder.group({
      title: [this.model.title, Validators.required],
      description: [this.model.description]
    });
  }

  editMode = false;

  onSubmit() {
    this.editMode = false;
    this.model = this.form.value;
  }

}
