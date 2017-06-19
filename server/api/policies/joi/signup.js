var Joi = require('joi');
var atob = require('atob');


//schema for register routes
const registerSchema  = Joi.object().options({abortEarly:false}).keys({
    firstName       : Joi.string().required().alphanum(),
    lastName        : Joi.string().required().alphanum(),
    email           : Joi.string().email().required(),
    cityOfResidence : Joi.string().required(),
    password        : Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/),
    dateOfBirth     : Joi.date().required()

});


 module.exports = function signup(req,res,next){
     if(req.method.toUpperCase() == 'POST' && req.body.data)
     {   
          data = JSON.parse(atob(req.body.data));
          //Validate signup request
          Joi.validate(data, registerSchema, function(err,value){
        
            if(!err)
            {
                  next();
            }
            else
            {
                let error = [];
                for(let k of err.details){
                    error.push(k.path+ ' '+ 'Validation fails');
                       //console.log(k.path);
                }
                return res.badRequest({success: false, message:error});
            }
         })
     }
     else
     {
         return res.badRequest();
     }
 }