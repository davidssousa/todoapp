import  { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Criar todo',
    props<{ texto: string }>()
);


