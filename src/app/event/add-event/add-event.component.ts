import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  newEventForm: FormGroup;

  /* DateTime picker config */
  public touchUi = false;
  public minDate = new Date();
  public showSeconds = false;
  public color = 'primary';

  constructor(private formBuilder: FormBuilder) {}

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
    console.log(this.newEventForm.value);
    if (this.newEventForm.status !== 'VALID') {
      return;
    }
  }
}
