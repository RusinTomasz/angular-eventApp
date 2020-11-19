import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Services */
import { FormValidatorService } from './../../helpers/form-validator.service';

/* RxJS */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/* NgRx */
import { Store } from '@ngrx/store';
import { State } from './../../state/app.state';
import {
  getLoadingStatus,
  getRegisterUserError,
  getRegisterUserSuccessMessage,
} from './../state/index';
import { AuthPageActions } from '../state/actions';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  errorMessage$ = this.store.select(getRegisterUserError);
  successMessage$ = this.store.select(getRegisterUserSuccessMessage);
  isLoading$ = this.store.select(getLoadingStatus);

  private unsubscribeAll: Subject<any>;

  constructor(
    private formBuilder: FormBuilder,
    private formValidatorService: FormValidatorService,
    private store: Store<State>
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [
        '',
        [
          Validators.required,
          this.formValidatorService.confirmPasswordValidator,
        ],
      ],
    });

    this.registerForm
      .get('password')
      .valueChanges.pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        this.registerForm.get('passwordConfirm').updateValueAndValidity();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onSubmit() {
    if (this.registerForm.status !== 'VALID') {
      return;
    }

    this.store.dispatch(
      AuthPageActions.registerUser({
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      })
    );
  }
}
