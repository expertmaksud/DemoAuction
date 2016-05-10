import { Injectable } from '@angular/core';
import {User} from './user';
import {Auction} from "./auction";

@Injectable()
export class SharedStorageService {

    constructor() { }
    
    public CurrentUser:User= new User("","","","");
    public RunningAuction: Auction=new Auction(new Date());
    

}