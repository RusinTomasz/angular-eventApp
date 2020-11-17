// /* NgRx */
import { createReducer, on } from '@ngrx/store';
import { AuthApiActions, AuthPageActions } from './actions';

// // State for this feature (Auth)
export interface AuthState {
  errors?: {
    loginError?: string | null;
    registerUserError?: string | null;
  };
  success?: { successUserRegistrationMessage: string | null };
  isLoading: boolean;
}

const initialState: AuthState = {
  errors: {
    loginError: '',
    registerUserError: '',
  },
  success: { successUserRegistrationMessage: '' },
  isLoading: false,
};

export const authReducer = createReducer<AuthState>(
  initialState,
  on(
    AuthPageActions.loginUser,
    (state): AuthState => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    AuthApiActions.loginUserSuccess,
    (state): AuthState => {
      return {
        ...state,
        errors: { ...state.errors, loginError: '' },
        isLoading: false,
      };
    }
  ),
  on(
    AuthApiActions.loginUserFailure,
    (state, action): AuthState => {
      return {
        ...state,
        errors: { ...state.errors, loginError: action.error },
        isLoading: false,
      };
    }
  ),
  on(
    AuthPageActions.registerUser,
    (state): AuthState => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    AuthApiActions.registerUserSuccess,
    (state, action): AuthState => {
      return {
        ...state,
        errors: { ...state.errors, registerUserError: '' },
        success: {
          ...state.success,
          successUserRegistrationMessage: action.success,
        },
        isLoading: false,
      };
    }
  ),
  on(
    AuthApiActions.registerUserFailure,
    (state, action): AuthState => {
      return {
        ...state,
        errors: { ...state.errors, registerUserError: action.error },
        isLoading: false,
      };
    }
  )
);
