import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

/* RxJs */
import { catchError } from 'rxjs/operators';
import { defer, throwError, from, Observable } from 'rxjs';

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
  userData: Observable<any>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userData = angularFireAuth.authState;
  }

  signUp(email: string, password: string) {
    return this.getCreateUserObservable(email, password).pipe(
      catchError(this.handleError)
    );
  }

  private getCreateUserObservable(email: string, password: string) {
    // Wait until an observer subscibes before creating the actual observable
    return defer(() =>
      from(this.angularFireAuth.createUserWithEmailAndPassword(email, password))
    );
  }

  signIn(email: string, password: string) {
    return this.getLoginUserObservable(email, password).pipe(
      catchError(this.handleError)
    );
  }

  private getLoginUserObservable(email: string, password: string) {
    // Wait until an observer subscibes before creating the actual observable
    return defer(() =>
      from(this.angularFireAuth.signInWithEmailAndPassword(email, password))
    );
  }

  logout() {
    this.angularFireAuth.signOut();
    this.router.navigate(['/login']);
  }

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
