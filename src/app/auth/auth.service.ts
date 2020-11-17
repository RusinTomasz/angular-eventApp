import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

/* RxJs */
import { catchError } from 'rxjs/operators';
import { defer, throwError, from } from 'rxjs';

/* AngularFire */
import { AngularFireAuth } from '@angular/fire/auth';

export interface LoginInterface {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  token: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private angularFireAuth: AngularFireAuth
  ) {}

  signUp(email: string, password: string) {
    return this.getFireAuthCreateuser(email, password).pipe(
      catchError(this.handleError)
    );
  }

  getFireAuthCreateuser(email: string, password: string) {
    // Wait until an observer subscibes before creating the actual observable
    return defer(() =>
      from(this.angularFireAuth.createUserWithEmailAndPassword(email, password))
    );
  }

  // signIn(email: string, password: string) {
  //   const userToLogin = {
  //     email,
  //     password,
  //   };

  //   return this.http
  //     .post<LoginInterface>('http://localhost:8080/auth/login', userToLogin)
  //     .pipe(
  //       catchError(this.handleError),
  //       tap((response) => {
  //         this.handleAuthentication(
  //           response.firstName,
  //           response.lastName,
  //           response.email,
  //           response.token,
  //           response.userId,
  //           response.role
  //         );
  //       })
  //     );
  // }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Wystąpił błąd, proszę spróbować ponownie.';
    if (!errorRes.message) {
      return throwError(errorMessage);
    }
    switch (errorRes.message) {
      case 'The email address is already in use by another account.':
        errorMessage = 'Adres email jest już używany przez innego użytkownika.';
        break;
    }

    return throwError(errorMessage);
  }
}
