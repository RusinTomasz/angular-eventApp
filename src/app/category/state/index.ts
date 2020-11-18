import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from './category.reducer';

import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  category: CategoryState;
}

// // Selector functions
const getCategoryFeatureState = createFeatureSelector<CategoryState>(
  'category'
);

export const getCategories = createSelector(
  getCategoryFeatureState,
  (state) => state.categories
);
