# ReactiveFE

Frontend in angular for reactive application:

https://github.com/milanbr/reactive

### Starting application

`npm install`

`ng serve`

### Observables

user.component.html:
`{{users}}`

### Server sent events

user.component.html:
`{{users$ | async}}`

The async pipe subscribes to an Observable and returns the latest value it has emitted.

In browser is seen in Request Headers: Accept:text/event-stream and EventStream.

### Web socket

user.component.html: 
`{{usersWs$ | async}}`

In browser is seen in Request Headers: Connection:Upgrade, Upgrade:websocket and Frames.
