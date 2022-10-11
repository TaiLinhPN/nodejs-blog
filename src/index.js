const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const routes = require("./routes");
app.use(express.static(path.join(__dirname, "public")));
//http loger
// app.use(morgan("combined"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//template engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));


// Route init

routes(app);

app.use(function (req, res, next) {
  next(createError(404));
});
// catch 404 and forward to error handler

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
