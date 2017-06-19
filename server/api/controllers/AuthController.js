/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var atob = require('atob');
var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;
var homeurl = 'http://localhost:4200';

module.exports = {
	signin : (req,res)=>{
        data = JSON.parse(atob(req.body.data));
        console.log(data);
        User.findOne({email : data.email}, function(err, user){
            if(err){
                throw err;
            }
            if(user){  
                User.comparePassword(data.password, user.password, function(err,val){
                    if(err) return res.json({success: false, message: 'Password Error'});
                    if(val){
                           token = jwt.sign({id: user.id});
                          return res.json({success:true, message: token});
                    }
                   else{
                       return res.json({success : false, message: 'User not found' });
                   }
                })
            }
            else{
                return res.json({success : false, message: 'User not found' });
            }
        })
        //find the user in User 
    },

    //signup process
    signup : (req,res) =>{
          data = JSON.parse(atob(req.body.data));
         
        //save user data in user model
        User.create(data).exec(function(err,user){
            if(err)
            { 
               
                if(err.invalidAttributes['email']){
                     return res.badRequest({success: false, message: ['Email Already Exists']}); 
                }
               else{
                   return res.badRequest({success: false, message: 'Something went wrong'});
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
               
                return res.json({success: true, message: {data: 'User Data Saved Successfully', name: user.first_name+' '+user.last_name, email: user.email }});
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

