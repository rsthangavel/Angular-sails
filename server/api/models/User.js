/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;
module.exports = {

  attributes: {
     firstName : {
       type : 'string',
       required : true
     },
     lastName : {
        type : 'string',
        required : true
     },
     email  : {
       type : 'string',
       unique: true,
       required : true
     },
     password : {
       type : 'string',
       required : true
     },
     cityOfResidence : {
       type : 'string',
       required : true
     },
     dateOfBirth : {
       type : 'date',
       required : true
      },
      activated : {
        type: 'boolean',
        defaultsTo : false
      },
      ForgotPasswordToken : {
        type : 'string',
        default : 'null'        
      }
     
  },
   beforeCreate : function (value, next)
      {
           bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
             if(err) return next(err);
             bcrypt.hash(value.password, salt, function(err, hash){
               if(err) return next(err);
               value.password = hash;
               next();
             })
           });
            
      },
  //     afterCreate : function(value, next)
  //     {
  //        bcrypt.compare('Te1', value.password, function(err, isMatch){
  //      if(err) return next(err);
  //       console.log(isMatch);
  //  })

  //     }  
};

