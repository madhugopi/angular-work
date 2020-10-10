import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as EventActions from '../../actions/event.actions';
import * as EventSelector from '../../selectors/event.selectors';
// import { RemoveEvent } from '../../actions/event.actions';
import { EventService } from '../../core/http/event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Observable<Event[]>;
  errorMessage: any = null;
  constructor(
    private store: Store,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new EventActions.LoadEvents());
    this.store.pipe(select(EventSelector.getEvent)).subscribe((data: any) => {
      this.events = data;
    })

    this.store.pipe(select(EventSelector.getError)).subscribe((err: any) => {
      console.log(err);
    })
  }

  removeEvent(index: number) {
    this.store.dispatch(new EventActions.RemoveEvent({data:index}));
  }

}
