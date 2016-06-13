/**
 * BidController
 *
 * @description :: Server-side logic for managing Bids
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: function (req, res) {
        var data = (req.body) ? req.body : undefined;
        BidService.addBid(data, function (success) {
            Bid.publishCreate(
                {
                    Id: data.Id,
                    DealId: data.DealId,
                    Amount: data.Amount,
                    CompanyName: data.CompanyName,
                    Country: data.Country
                });
            res.json(success);
        });
    },
    subscribe: function (req, res) {
        Bid.watch(req);
    },
    getByAuction: function (req, res) {
          AuctionService.getAuction(function (success) {
            if (success != undefined) {
                BidService.getDataByAuction(success.Id, function (bid) {
                    res.json(bid);
                });
            }
        });

    }
};

