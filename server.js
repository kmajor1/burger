const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public")); // static content 

// Middleware to parse body JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes 
const routes = require('./controllers/burgers_controllers.js')
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
