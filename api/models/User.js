/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    UserName: {
      type: 'string',
      unique: true,
      primaryKey: true

    },
    CompanyName: {
      type: 'string',
      rangeKey: true
    },
     Email: {
       type: 'string'
     },
     PhoneNo: {
       type: 'string'
     }

  }
};

