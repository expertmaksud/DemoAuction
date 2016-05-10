/**
 * AuctionController
 *
 * @description :: Server-side logic for managing Auctions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var moment = require('moment');
 
module.exports = {
     
    add: function (req, res) {
        var endTime = moment().add(5, 'm');
       
        AuctionService.addAuction(endTime, function (success) {
            res.json(success);
        });
    }
};

