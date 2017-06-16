var Joi = require('joi');
var atob = require('atob');
//schema for register routes
const signinSchema = Joi.object().keys({
 
    email     : Joi.string().email().required(),
    password    : Joi.string().regex(/[a-zA-z0-9]{3,30}/).required(),
})

 module.exports = function(req,res,next){
     if(req.method.toUpperCase() == 'POST' && req.body.data)
     {
        data = JSON.parse(atob(req.body.data));
        Joi.validate(data, signinSchema, function(err,value){
          if(!err)
          {
            next();
          }
          else
          {
            return res.badRequest(err);
          }
        })
     }
     else
     {
         return res.badRequest();
     }
 }