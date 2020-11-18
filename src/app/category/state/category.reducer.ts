import { createReducer, on } from '@ngrx/store';
import { CategoryPageActions, CategoryApiActions } from './actions';
export interface CategoryState {
  categories: string[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categoryReducer = createReducer<CategoryState>(
  initialState,
  on(
    CategoryPageActions.getCategories,
    (state): CategoryState => {
      return {
        ...state,
      };
    }
  ),
  on(
    CategoryApiActions.getCategoriesSuccess,
    (state, action): CategoryState => {
      return {
        ...state,
        categories: action.categories,
      };
    }
  )
);
