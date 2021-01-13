
const fetch = require('node-fetch')

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");
const { response } = require("express");
const cron = require('node-cron');
const shell = require('shelljs');
const app = express();





//NodeCron Job scheduler 
// cron.schedule("* * * * * *", function(){
//    console.log("node js script runnning")
// })


//Bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));



app.use("/users", async (req,res) => {

   //1
   //Generate method to bring in token 
   //Token lifecycle 24 hours 
   //use token 
   //Generate token once to have multiple uses fpr token as to not have to generate it multilple times 

   //2
   //Create Lockout list 
   //Can be a text file or database
   //Store all emails that were sync'd already

   
})

//Signup Route
app.post('/signup', (req,res)=> {
   const { firstName, lastName, email } = req.body;

   //Validation
   if(!firstName || !lastName || !email){
      res.redirect('/fail.html');
      return
   }

   //Construct req Data as API Dictactes 
   const data = {
      members: [
         {
         email_address:email,
      status:'subscribed',
      merge_fields: {
         FName: firstName,
         LName: lastName
      }
      }
      ]
      
   }

   const postData = JSON.stringify(data)

   const options = {
      //URL with data center and List ID
      url:'https://mandrillapp.com/api/1.0/users/ping',
      method: 'POST',
      headers: {
         //API KEY
         Authorization:"auth 8a78daeb7124f01ed129530f35d8f42f-us18"
      },
      body:postData
   }

   request(options , (err,response, body) => {
      if(err){
         res.redirect('/fail.html');
      } else {
         if(response.statusCode === 200) {
            res.redirect('/success.html');
         } else {
            res.redirect('/fail.html');
         }
      }
   });


   
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));

