
import { Action, ActionReducer, createReducer, on, Store } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Roubar escudo Capitão América')
];



const _todoReducer = createReducer(
  initialState,
  on(create, (state, { texto }) => 
   [...state, new Todo( texto ) ]
  )    
);
  
  // console.log(texto, 'asdfffffff',[...state, new Todo( texto ) ])

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}