const express = require("express");
const bodyParser = require("body-parser")


const hostname = '127.0.0.33';
const port = 5501;
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/form.html");
});
  
app.post("/display", function(req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
    
  var FullName = fname +" "+ lname ;
    
  res.send("<b>Full Name is -</b> " + FullName);
});
  

app.listen(5501, function(){
  console.log(`server is running on http://${hostname}:${port}/`);
})