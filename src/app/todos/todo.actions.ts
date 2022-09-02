import  { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Criar todo',
    props<{ texto: string }>()
);

export const toogle = createAction(
    '[TODO] Reverter todo',
    props<{ id: number }>()
);

export const edit = createAction(
    '[TODO] Edit todo',
    props<{ id: number, texto: string }>()
);

export const remove = createAction(
    '[TODO] Remover todo',
    props<{ id: number }>()
);
