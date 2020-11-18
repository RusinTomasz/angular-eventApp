import { Injectable } from '@angular/core';

/* Services */
import { CategoryService } from '../category.service';

/* RxJs */
import { map, catchError, concatMap, take, shareReplay } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryPageActions, CategoryApiActions } from './actions';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}

  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoryPageActions.getCategories),
      concatMap(() =>
        this.categoryService.getCategories().pipe(
          take(1),
          shareReplay(1),
          map((categories: string[]) =>
            CategoryApiActions.getCategoriesSuccess({ categories })
          ),
          catchError((error) =>
            of(CategoryApiActions.getCategoriesFailure({ error }))
          )
        )
      )
    );
  });
}
