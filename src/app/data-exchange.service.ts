import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ViewState } from './data.model'


@Injectable({
  providedIn: 'root'
})
export class VisibilityEventsService {
  onVisibilityChangeSubject : Subject<ViewState> = new Subject();
  constructor() { }
  onVisibilityChange = this.onVisibilityChangeSubject.asObservable();
  emitEvent(stateObject:ViewState):void {
    this.onVisibilityChangeSubject.next(stateObject)
  }
}
