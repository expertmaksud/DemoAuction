var moment = require('moment');
module.exports = {

    addAuction: function (endTime, next) {
        var now = moment();
        Auction.find({ Id: { '>': new Date(now)  } }).exec(function (err, auctions) {
            if (err) {
                throw err;
            }
            if (auctions[0].count == 0) {
                Auction.create(
                    {
                        Id: new Date(endTime)
                    }).exec(function (err, auction) {
                        if (err) {
                            throw err;
                        }
                        next(auction);
                    })
            } else {
                next(auctions[0].items[0]);
            }
        });

    },
    
    getAuction: function (next) {  
        var now = moment();    
        Auction.find({ Id: { '>': new Date(now)  } }).exec(function (err, auctions) {
            if (err) {
                throw err;
            }
           next(auctions[0].items[0]);
            
        });

    }
};