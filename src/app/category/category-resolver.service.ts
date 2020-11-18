import { Store } from '@ngrx/store';
import { State } from './../state/app.state';
import { Injectable } from '@angular/core';

import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { CategoryPageActions } from './state/actions';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryResolverService implements Resolve<any> {
  constructor(private store: Store<State>) {}

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    this.store.dispatch(CategoryPageActions.getCategories());
    return of([]);
  }
}
