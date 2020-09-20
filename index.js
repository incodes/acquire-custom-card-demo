var express = require("express");
var app = express();
bodyParser = require('body-parser');



app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');


app.get("/custom_card/demo", (req, res, next) => {
   // decode url encoded query data and extract  
   const query = JSON.parse(decodeURIComponent(JSON.stringify(req.query)));

   // todo:: 
   // perform operations using these data from Acquire Contact
   // example - save, fetch, update your db or other sources. 
   // Render your own Custom Template in Acquire Dashboard right-side View
   // process andrender any type of template accordingly; like Cards, Forms, Tables etc.

   // passed query data into EJS template to render dynamic UI 
   res.render('./card-template', {params: query});
   });

