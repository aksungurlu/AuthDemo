var express   = require("express"),
    app       = express(),
    mongoose  = require("mongoose");

app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/auth-demo");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});

app.listen(3000, () => {
  console.log("Server is started...");
});
