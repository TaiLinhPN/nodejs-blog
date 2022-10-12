const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./config/db');
const { createError } = require('./util/errors');

app.use(express.static(path.join(__dirname, 'public')));
//http loger
// app.use(morgan("combined"))

//db connect
db.connect()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//template engine
app.engine(
  'hbs',
  engine({
    extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init

routes(app);

app.use(function (req, res) {
  if (req.statusCode) {
    res.json(createError(req.statusCode, req.statusMessage));
    return
  }
  res.json(createError(404, "Not found!"));
});
// catch 404 and forward to error handler

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
