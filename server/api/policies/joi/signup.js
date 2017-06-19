var Joi = require('joi');
var atob = require('atob');


//schema for register routes
const registerSchema  = Joi.object().options({abortEarly:false}).keys({
    first_name        : Joi.string().required().alphanum(),
    last_name         : Joi.string().required().alphanum(),
    email             : Joi.string().email().required(),
    city_of_residence : Joi.string().required(),
    password          : Joi.string().required().regex(/^[a-zA-Z0-9@-]{3,30}$/),
    date_of_birth     : Joi.date().required(),
    toc               : Joi.boolean().required()

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