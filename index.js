var express = require("express");
var app = express();
bodyParser = require('body-parser');



app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');


app.get("/custom_card/demo", (req, res, next) => {
   const query = JSON.parse(decodeURIComponent(JSON.stringify(req.query)));
    
   res.render('./card-template', {params: query});
    
   });

