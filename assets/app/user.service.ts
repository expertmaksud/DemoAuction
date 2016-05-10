import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


import {User} from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  private userUrl = '/user/';

  addUser(user: User): Observable<User> {
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.userUrl + 'add', body, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    console.log("Initial Uesr:" + body.UserName);
    return body || {};
  }
  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
