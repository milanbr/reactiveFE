import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from './user.service';
import {SseService} from './sse.service';
import {Observable} from 'rxjs/Rx';
import {WebsocketService} from './websocket.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: string[];
  users$: Observable<string>;
  usersWs$: Observable<string>;
  @ViewChild('input') searchButton: ElementRef;

  constructor(public userService: UserService, public sseService: SseService, public wsService: WebsocketService) {
  }

  ngOnInit() {
  }

  getUsers() {
    const users$ = this.userService.getUsers();

    users$.subscribe((userNames: string[]) => {
      this.users = [];

      for (const userName of userNames) {
        console.log(userName);
        this.users.push(userName);
      }
    });
  }

  getUsersSse() {
    this.users$ = this.sseService.getUsers();
  }

  getUsersWs() {
    this.usersWs$ = this.wsService.getUsers();
  }

  getUsersClick() {
    this.getUsers();
  }

  getUsersSseClick() {
    this.getUsersSse();
  }

  getUsersWsClick() {
    this.getUsersWs();
  }

  sendMessageWS(message: string) {
    this.wsService.sendMessage(message);
  }
}
