import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../models/event';
import { select, Store } from '@ngrx/store';
import * as EventActions from '../../actions/event.actions';
import * as EventSelector from '../../selectors/event.selectors';
import { EventService } from '../../core/http/event.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  errorMessage: string = null;
  eventForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    date: ['', Validators.required]
  });

  public errorMessages = {
    name: [
      { type: 'required', message: 'Event name is required' }
    ],
    address: [
      { type: 'required', message: 'Address is required' }
    ],
    date: [
      { type: 'required', message: 'Date is required' }
    ]
  }

  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private store: Store,
    private eventService: EventService
    ) { }

  ngOnInit(): void {
    // this.eventForm.controls.name.value
  }

  back() {
    this.location.back();
  }

  addEvent() {
    if(!this.eventForm.invalid) {
      const newEvent = new Event();
      newEvent.name = this.eventForm.controls.name.value;
      newEvent.address = this.eventForm.controls.address.value;
      newEvent.date = this.eventForm.controls.date.value;
      this.store.dispatch(new EventActions.AddEvent({data:newEvent}));
      this.location.back();
    } else {
      this.showAlert("Please enter valid data.");
    }
  }

  showAlert(mess: string) {
    this.errorMessage = mess;
    setTimeout(()=>{
      this.errorMessage = null;
    }, 2000);
  }

}
