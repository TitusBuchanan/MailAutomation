var cron = require('node-cron');
var nodemailer = require('nodemailer');
var app = express(),


//Email schedules code comes here
const PORT = process.env.PORT || 5000;
//Listening to port
app.listen(PORT);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'xyz@gmail.com',   //put your mail here
            pass: 'xyz'              //password here
          }
 });
 const mailOptions = { 
               //Get All
               //Check Unposted
               //Validate 
               //If new pass to mailchimp
 }