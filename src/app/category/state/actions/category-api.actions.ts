/* NgRx */
import { createAction, props } from '@ngrx/store';

/* Login */

export const getCategoriesSuccess = createAction(
  '[Category API] Get Categories Success',
  props<{ categories: string[] }>()
);

export const getCategoriesFailure = createAction(
  '[Category API] Get Categories Fail',
  props<{ error: string }>()
);
