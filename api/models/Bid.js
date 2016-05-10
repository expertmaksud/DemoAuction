/**
 * Bid.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      Id: {
      type: 'string',
      unique: true,
      primaryKey: true

    },
    AuctionId:{
      type:'string'
    },
    DealId:{
      type: 'integer'
    },
    Amount:{
      type:'float'
    },
    CompanyName:{
      type:'string'
    },
    Country:{
      type:'string'
    }
  }
};

