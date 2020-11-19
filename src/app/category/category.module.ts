import { NgModule } from '@angular/core';
import { ThemeSharedModule } from './../shared.module';

/* NgRx */
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './state/category.effects';
import { categoryReducer } from './state/category.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    //Shared
    ThemeSharedModule,
    //NgRx
    StoreModule.forFeature('category', categoryReducer),
    EffectsModule.forFeature([CategoryEffects]),
  ],
  exports: [],
})
export class CategoryModule {}
