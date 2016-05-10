import { Component, OnInit, NgZone } from '@angular/core';
import {Bid} from './bid';
import {BidService} from './bid.service';
import {SharedStorageService} from "./sharedStorage.service";


declare var io: any;

@Component({
    selector: 'selector',
    templateUrl: 'app/admin.component.html'
})
export class AdminComponent implements OnInit {
    socket: any;
    dataModel: Bid[];
    errorMessage:string;

    constructor(private _ngZone: NgZone, private bidService: BidService) {

        io.socket.get('/bid/subscribe', function (res) {
            console.log(res);
        });

        this.initListeners();
        /** this.socket.on("bid", (msg) => {
            //this.messages.push(msg);
             console.log('Socket connect');
        }); */

    }

    ngOnInit() { }

    initListeners() {
        this.dataModel = [];
          this.bidService.getBidsByAuction()
                .subscribe(
                bid => this.dataModel = bid,
                error => this.errorMessage = <any>error);

        io.socket.on("bid", (msg) => {
            this._ngZone.run(() => {
                this.dataModel.push(msg.data);
                console.log('New Socket Data');
            });
        });

    }

}