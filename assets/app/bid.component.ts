import { Component, OnInit } from '@angular/core';
import {Bid} from './bid';
import {User} from "./user";
import {Auction} from "./auction";
import {SharedStorageService} from "./sharedStorage.service";
import {BidService} from "./bid.service";

@Component({
    selector: 'acution-bid',
    templateUrl: 'app/bid.component.html'
})
export class BidComponent implements OnInit {
    currentUser: User = new User('', '', '', '');
    Bids: Bid[];
    show: boolean[];
    errorMessage: string;

    constructor(private sharedStorageService: SharedStorageService, private bidService: BidService) {


    }


    ngOnInit() {
        this.Bids = [];
        this.show = [];

        this.currentUser = this.sharedStorageService.CurrentUser;
        //this.runningAuction = this.sharedStorageService.RunningAuction;
        for (var index = 0; index < 5; index++) {
            var bidId = this.sharedStorageService.CurrentUser.UserName + '#' + (index + 1)

            this.Bids.push(new Bid(bidId, null, index + 1, this.sharedStorageService.CurrentUser.CompanyName, 'Bangladesh',
                this.sharedStorageService.RunningAuction.Id.toString(),false));
            

        }
    }

    addBid(bidModel: Bid) {
        if (!bidModel.Amount || bidModel.Amount < 1) {
            return;
        }

        var result = confirm("Are you sure you like to submit the bid?");
        if (result == true) {
            this.bidService.addBid(bidModel)
                .subscribe(
                bid => bidModel = bid,
                error => this.errorMessage = <any>error);
            bidModel.IsAdded = true;
        } else {
            return;
        }
    }

}