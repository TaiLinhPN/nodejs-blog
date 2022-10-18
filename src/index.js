const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const routes = require("./routes");
const db = require("./config/db");
const { createError } = require("./util/errors");
const methodOverride = require("method-override");
app.use(express.static(path.join(__dirname, "public")));
//http loger
// app.use(morgan("combined"))

//db connect
db.connect();

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//template engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
