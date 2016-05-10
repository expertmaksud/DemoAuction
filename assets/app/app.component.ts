import {Component, NgZone} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {UserComponent} from './user.component';
import {UserService} from './user.service';
import {AuctionService} from "./auction.service";
import {SharedStorageService} from "./sharedStorage.service";
import {BidComponent} from "./bid.component";
import {BidService} from "./bid.service";
import {AdminComponent} from "./admin.component";


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['User']">New Auction</a>   
      <a [routerLink]="['Admin']">Admin</a>   
    </nav>
    <router-outlet></router-outlet>
    
    `,
    directives: [CORE_DIRECTIVES,ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, UserService, AuctionService, SharedStorageService,
        BidService]
})

@RouteConfig([{
    path: '/new',
    name: 'User',
    component: UserComponent,
    useAsDefault: true
},
    {
        path: '/auction',
        name: 'Auction',
        component: BidComponent
    },
    {
        path: '/amin',
        name: 'Admin',
        component: AdminComponent
    }])

export class AppComponent {

    title = 'Demo Auction';
}