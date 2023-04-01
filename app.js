const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true })); // if false show object prototype instead
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);

app.use(shopRouter);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render('404', {pageTitle: "Page Not Found"})
});

app.listen(3000);
