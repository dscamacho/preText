const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

var xhttp = new XMLHttpRequest();
xhttp.open("post", "/", true);
xhttp

var preTexts = [];

app.get("/", function (req, res) {
    res.render("home", {
        preTexts: preTexts
    });
});

app.post("/", function(req, res){
    const preText = {
      key: req.body.preTextKey,
      content: req.body.preTextContent
    };
  
    preTexts.push(preText);
  
    res.redirect("/");
    console.log(preTexts);  
  });

app.listen(3000, function () {
    console.log("Server started on port 3000");
});