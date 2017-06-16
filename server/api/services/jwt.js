var jwt   = require('jsonwebtoken');
var uuid  = require('uuid/v1');



//secret code for jsonwebtoken
tokenSecret = '%$gY)nQ=!}3Bla&43@';

//issue token to authorized user
module.exports.sign = function(payload){
   return jwt.sign(payload, tokenSecret, {
        expiresIn : 3,
        jwtid     :uuid()
    })
};


//verify token from request header
module.exports.verify = function(token, next){
      jwt.verify(token, tokenSecret, function(err,decoded){
        if(!err){
            next(null,decoded);
        }
        else{
            return next(err);
        }
    });
}
