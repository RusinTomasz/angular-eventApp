// import { User } from './../../user';
// /* NgRx */
import { createAction, props } from '@ngrx/store';

// /* Login */

// export const loginUser = createAction(
//   '[Auth Page] Login User',
//   props<{ email: string; password: string }>()
// );

// export const logoutUser = createAction('[Auth Page] Logout User');

// export const autoLogin = createAction(
//   '[Auth Page] Auto Login',
//   props<{ userData: User }>()
// );

// /* Register */

export const registerUser = createAction(
  '[Auth Page] Register User',
  props<{
    email: string;
    password: string;
  }>()
);

// /* Verify Account */

// export const verifyAccount = createAction('[Auth Page] Verify Account');

// /* Forgot Password */

// export const sendEmailToResetPassword = createAction(
//   '[Auth Page] Send Email To Reset Password',
//   props<{ email: string }>()
// );

// /* Reset Password */

// export const resetPassword = createAction(
//   '[Auth Page] Reset Password',
//   props<{ newPass: string }>()
// );
