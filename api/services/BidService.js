module.exports = {

    addBid: function (data, next) {
        Bid.create(
            {
                Id: data.Id,
                CompanyName: data.CompanyName,
                AuctionId: data.AuctionId,
                DealId: data.DealId,
                Amount: data.Amount,
                Country: data.Country
            }).exec(function (err, user) {
                if (err) {
                    throw err;
                }
                next(user);
            })
    },

    getDataByAuction: function (auctionId, next) {
        Bid.find({ AuctionId: auctionId }).exec(function (err, auctions) {
            if (err) {
                throw err;
            }
            next(auctions[0].items);
        });

    }
};