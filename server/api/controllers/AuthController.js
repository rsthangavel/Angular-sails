/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var atob = require('atob');
var homeurl = 'http://localhost:4200';

module.exports = {
	signin : (req,res)=>{
        console.log(req);
    },

    //signup process
    signup : (req,res) =>{
          data = JSON.parse(atob(req.body.data));
         
        //save user data in user model
        User.create(data).exec(function(err,user){
            if(err)
            { 
                if(err.invalidAttributes){
                     return res.json({success: false, message: err.invalidAttributes}); 
                }
               else{
                   return res.json({success: false, message: 'Something went wrong'});
               }      
            }
            if(user)
            {
                //create token for Authorized user
                token = jwt.sign({id: user.id});
               nodemailer.send(user.email, token, function(err,response){
                    if(err) return res.json(err);
                    else{
                        jwt.issue()
                        return res.json(response);
                    }
                });
               
                return res.json({success: false, data: user});
            }
        })
      
    },

    //email Verification
    activate_account : (req,res) =>{
        if(req.query.token && req.query.token !== 'null' && req.query.token !== 'undefined'){
              //console.log(req.query.token);
              jwt.verify(req.query.token, function(err,response){
                  if(err)
                  {
                       return res.badRequest(err.message);
                  }
                  else
                  {
                       return res.redirect(homeurl+'/email_verified');
                  }
                  //console.log(err, response);
              });
              
        }
        else{
            return res.badRequest("Invalid Request");
        }
       
    }
    
};

