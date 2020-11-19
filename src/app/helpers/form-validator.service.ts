import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidatorService {
  constructor() {}

  confirmPasswordValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    if (!control.parent || !control) {
      return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
      return null;
    }

    if (passwordConfirm.value === '') {
      return null;
    }

    if (password.value === passwordConfirm.value) {
      return null;
    }

    return { passwordsNotMatching: true };
  };

  dateEndValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    if (!control.parent || !control) {
      return null;
    }

    const startTime = control.parent.get('startTime');
    const endTime = control.parent.get('endTime');

    if (!startTime || !endTime) {
      return null;
    }

    if (endTime.value === '') {
      return null;
    }

    if (startTime.value <= endTime.value) {
      return null;
    }

    return { dateEndIsNotValid: true };
  };
}
