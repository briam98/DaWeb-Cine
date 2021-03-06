var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var controller = require('./controller');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartelera1Router = require('./routes/cartelera1');
var cartelera2Router = require('./routes/cartelera2');
var cartelera3Router = require('./routes/cartelera3');
var tarjetaRouter = require('./routes/tarjeta');
var loginRouter = require('./routes/login');
var registroRouter = require('./routes/registro');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cartelera1', cartelera1Router);
app.use('/cartelera2', cartelera2Router);
app.use('/cartelera3', cartelera3Router);
app.use('/tarjeta', tarjetaRouter);
app.use('/login', loginRouter);
app.use('/registro', registroRouter);
app.use('/validarLogin', function(req, res, next) {
  controller.validarLogin(req,res);
});
app.use('/register', function(req, res, next) {
  controller.register(req,res);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
