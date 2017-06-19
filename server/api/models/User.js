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
     first_name : {
       type : 'string',
       required : true
     },
     last_name : {
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
     city_of_residence : {
       type : 'string',
       required : true
     },
     date_of_birth : {
       type : 'date',
       required : true
      },
      status : {
        type: 'boolean',
        defaultsTo : 0
      },
      forgot_password_token : {
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
  //check password 
  comparePassword : function(password, user_password, cb){
   bcrypt.compare(password, user_password, function(err, isMatch){
       if(err) return cb(err);
       cb(null, isMatch);
   })
}
};

