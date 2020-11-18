import { AuthGuard } from './../auth/auth.guard';
import { ThemeSharedModule } from './../shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* Components */
import { AddEventComponent } from './add-event/add-event.component';

/* Material */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

/* DateTime picker */
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';

/* NgRx */

const routes = [
  {
    path: 'new-event',
    component: AddEventComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [AddEventComponent],
  imports: [
    RouterModule.forChild(routes),
    //Shared
    ThemeSharedModule,
    //Material
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    //DateTime picker
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
  ],
})
export class EventModule {}
