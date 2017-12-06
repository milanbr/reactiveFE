import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WebsocketService {

  wsUrl = 'ws://localhost:8080/socket/api/users';
  socket: WebSocket;

  constructor() {
  }

  getUsers(): Observable<string> {
    return new Observable<string>(obs => {
      this.socket = new WebSocket(this.wsUrl);

      this.socket.onopen = function () {
        console.log('ws connection opened');
      };

      this.socket.onmessage = function (e) {
        const message = JSON.parse(e.data);
        console.log('ws got message with name: ' + message.name);
      };

      this.socket.onclose = function (e) {
        console.log('ws connection closed');
      };
    });
  }

  sendMessage(message: string) {
    this.socket.send(message);
  }
}
