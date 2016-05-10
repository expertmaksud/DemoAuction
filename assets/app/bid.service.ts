import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Bid} from './bid';

@Injectable()
export class BidService {

  constructor(private http: Http) { }
  private bidUrl = '/bid/';

  addBid(bid: Bid): Observable<Bid> {
    let body = JSON.stringify(bid);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.bidUrl + 'add', body, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  getBidsByAuction(): Observable<Bid[]> {
 
    return this.http.get(this.bidUrl + 'getByAuction')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();

    return body || {};
  }
  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
