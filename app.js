const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//Bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Signup Route
app.post('/signup', (req,res)=> {
   const { firstName, lastName, email } = req.body;

//Validation to make sure fields are fillled
   if()
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));

