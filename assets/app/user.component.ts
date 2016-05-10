import {Component, Input} from "@angular/core";
import {Router} from '@angular/router-deprecated'
import {User} from "./user";
import {Auction} from "./auction";
import {UserService} from './user.service';
import {AuctionService} from "./auction.service";
import {SharedStorageService} from "./sharedStorage.service";




@Component({
    selector: 'auction-user',
    templateUrl: 'app/user.component.html'
})

export /**
 * UserComponent
 */
    class UserComponent {
    constructor(private userService: UserService, private auctionService: AuctionService,
        private router: Router, private sharedStorageService: SharedStorageService) { }

    model = new User('', '', '', '');
    auction = new Auction(new Date());
    errorMessage: string;



    addUser() {
        this.userService.addUser(this.model)
            .subscribe(
            user => this.getOrCreateAuction(user),
            error => this.errorMessage = <any>error);
    }

    private getOrCreateAuction(user: User) {
       console.log("User:" + user.UserName);
        this.sharedStorageService.CurrentUser = user;
        console.log("User:" + this.sharedStorageService.CurrentUser.UserName);
        this.auctionService.addAuction(this.auction).subscribe(
            auction => this.setAuction(auction),
            error => this.errorMessage = <any>error);

    }

    private setAuction(auction: Auction) {
        console.log(auction);
        this.sharedStorageService.RunningAuction = auction;
        console.log(this.sharedStorageService.RunningAuction);
        this.router.navigateByUrl('/auction');

    }
}
