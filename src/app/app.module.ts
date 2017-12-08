import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpModule} from '@angular/http';
import {UserService} from './user/user.service';
import {SseService} from './user/sse.service';
import {WebsocketService} from './user/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UserService, SseService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
