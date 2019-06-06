// Dependencies
const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

var PORT = 5000 || process.env.PORT

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/burger.js");
app.get("/", function(req, res) {
    res.render("public");
})

// app.use(routes);

app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
}); 