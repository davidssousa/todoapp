import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from './../todo.actions';

import { Todo } from './../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputEdit') txtInputEdit: ElementRef;
  
  chkCompleted: FormControl;
  txtInput: FormControl;

  editing: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {    
  }

  ngOnInit(): void {

    this.chkCompleted = new FormControl( 
      this.todo.completed 
    );

    this.txtInput = new FormControl( 
      this.todo.texto, Validators.required 
    );

    this.chkCompleted.valueChanges.subscribe(val => {
      this.store.dispatch(actions.toogle({ id: this.todo.id }));      
    });
  }

  onEditing(todo: Todo) {
    this.editing = true;
    this.txtInput.setValue( todo.texto );

    setTimeout(() => {
      this.txtInputEdit.nativeElement.select();      
    }, 1);
  }

  onFinalyEditing(todo: Todo) {
    this.editing = false;

    if ( this.txtInput.invalid ) return;

    this.store.dispatch( 
      actions.edit( todo )
    );
  }

}
