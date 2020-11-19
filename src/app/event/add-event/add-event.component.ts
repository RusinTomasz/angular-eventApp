import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
/* Services */
import { FormValidatorService } from './../../helpers/form-validator.service';

/* RxJS */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/* NgRx */
import { Store } from '@ngrx/store';
import { State } from './../../state/app.state';
import { getCategories } from './../../category/state/index';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  categories$ = this.store.select(getCategories);
  newEventForm: FormGroup;

  /* DateTime picker config */
  touchUi = false;
  minDate = new Date();
  showSeconds = false;
  color = 'primary';

  private unsubscribeAll: Subject<any>;

  constructor(
    private formBuilder: FormBuilder,
    private formValidatorService: FormValidatorService,
    private store: Store<State>
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.newEventForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      promoter: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: [
        '',
        [Validators.required, this.formValidatorService.dateEndValidator],
      ],
      description: ['', Validators.required],
    });

    this.newEventForm
      .get('startTime')
      .valueChanges.pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        this.newEventForm.get('endTime').updateValueAndValidity();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onSubmit() {
    console.log(this.newEventForm);
    if (this.newEventForm.status !== 'VALID') {
      return;
    }
  }
}
