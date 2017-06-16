var nodemailer = require('nodemailer');


 
 const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thangavel.asahi@gmail.com',
        pass: 'Test@123'
    }
});               

   
module.exports ={
    send : function(email, token, cb){
        //accounts.google.com/DisplayUnlockCaptcha should be turnoff for herokuapp mailer works
            
             let mailOptions = 
                   {
                    from: '"CityUsher 👻" <thangavel.asahi@gmail.com>', // sender address
                    to: email, // list of receivers
                    subject: 'CityUsher Account Verification ✔', // Subject line
                    text: 'Hello world ?', // plain text body
                    html: '<h1>Email Verification</h1><br /><a href="http://localhost:1337/auth/activate_account/?token='+token+'">Verify My Account</a>' // html body
                };


                  // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return cb(error);
                        }
                        else{
                            return cb(error, info);
                        }
                        });
    }
}
 