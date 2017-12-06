import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import * as R from 'ramda';

@Injectable()
export class UserService {

  url = 'http://localhost:8080/api/users';

  constructor(private http: Http) {
  }

  getUsers(): Observable<string[]> {
       return this.http.get(this.url, null)
      .map(data => data.json())
      // .do(data => console.log(data))
      .map(val => val === undefined ? '' : val)
      .map(data => this.getUserNames(data))
      .map(R.map(R.prop('name')));
  }

  private getUserNames(data: any): string[] {
    const userNames: string[] = [];

    for (const key of Object.keys(data)) {
      userNames.push(data[key]);
    }

    return userNames;
  }
}
