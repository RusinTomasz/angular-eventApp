import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { AuthState } from './auth.reducer';

export interface State extends AppState.State {
  auth: AuthState;
}

// // Selector functions
const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getLoginError = createSelector(
  getAuthFeatureState,
  (state) => state.errors.loginError
);

export const getRegisterUserError = createSelector(
  getAuthFeatureState,
  (state) => state.errors.registerUserError
);

export const getRegisterUserSuccessMessage = createSelector(
  getAuthFeatureState,
  (state) => state.success.successUserRegistrationMessage
);

export const getLoadingStatus = createSelector(
  getAuthFeatureState,
  (state) => state.isLoading
);
