var jwt = require('jsonwebtoken');

//secret code for jsonwebtoken
tokenSecret = '%$gY)nQ=!}3Bla&43@';
//schema for register routes

 module.exports = function(req,res,next){
     if(req.method.toUpperCase() == 'POST')
     {
      
      jwt.verify(token, tokenSecret, function(err,decoded){
        if(!err){
            next(null,decoded);
        }
        else{
            return next(err);
}
     });
     }
 }