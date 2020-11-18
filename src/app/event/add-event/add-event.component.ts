import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  constructor(private formBuilder: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.newEventForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      promoter: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.newEventForm);
    if (this.newEventForm.status !== 'VALID') {
      return;
    }
  }
}
