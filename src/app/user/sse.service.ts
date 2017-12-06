import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SseService {

  sseUrl = 'http://localhost:8080/api/users/sse';
  eventSource: any = window['EventSource'];

  constructor(public ngZone: NgZone) {
  }

  getUsers(): Observable<string> {
    return new Observable<string>(obs => {
      const eventSource = new this.eventSource(this.sseUrl);
      console.log('event source');

      eventSource.onopen = event => {
        console.log('sse connection opened');
      };

      eventSource.onmessage = event => {
        const resp: { name: string } = JSON.parse(event.data);
        console.log('sse: received event data', resp.name);

        // $apply external (window.EventSource) event data
        this.ngZone.run(() => obs.next(resp.name));
      };

      // close connection when observer unsubscribe
      return () => {
        eventSource.close();
        console.log('connection closed');
      };
    });
  }
}
