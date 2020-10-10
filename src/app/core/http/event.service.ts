import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Event } from '../../models/event';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('api/events').pipe(catchError(this.handleError));
  }

  addEvents(event: Event): Observable<Event[]>{
    return this.http.post<Event[]>('api/events',event).pipe(catchError(this.handleError));
  }

  deleteEvents(id: number) {
    return this.http.delete('api/events?${id}').pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error.message || "Server Error");
  }
}
