/**
 * ProfileInformation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    gender : {
      type : 'boolean',
      required : true
    },
      mobile : {
        type : 'array',
        required : true
      },
      profession : {
        type : 'array',
        required : true
      },
      languages : {
         type  : 'array',
         required : true
      },
      about_me  : {
        type : 'string',
        required : true
      }
  }
};

