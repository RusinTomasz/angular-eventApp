import { NgModule } from '@angular/core';
import { ThemeSharedModule } from './../shared.module';
import { RouterModule } from '@angular/router';

/* Material */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

/* Components */
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

/* NgRx */
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { authReducer } from './state/auth.reducer';
import { StoreModule } from '@ngrx/store';

const routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    //Shared
    ThemeSharedModule,
    //NgRx
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    //Material
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [],
})
export class AuthModule {}
