
import { Action, ActionReducer, createReducer, on, Store } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Fazer curso de NgRx no final de semana'),
  new Todo('Comprar curso de Java na Udemy'),
  new Todo('Levar meus filhos para assistir Dragon Ball'),
];



const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state, { texto }) => [...state, new Todo( texto ) ]),
  on(actions.toogle, (state, { id }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.edit, (state, { id, texto }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          texto
        }
      } else {
        return todo;
      }
    });
  }),
);
  

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}