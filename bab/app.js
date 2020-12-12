var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var favicon = require('serve-favicon');
require('dotenv').config();



var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var mainRouter = require('./routes/main');
var noAnswerRouter = require('./routes/main_noanswer');
var feedbackRouter = require('./routes/feedback');
var plus_sugRouter = require('./routes/plus_sug');
// var monthlyRouter = require('./routes/monthly');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));

var options = {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE
};

var sessionStore = new MySQLStore(options);

app.use(session({
  HttpOnly:true,
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: true     // 세션이 필요하기 전까지는 세션을 구동x
}));

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/main', mainRouter);
app.use('/feedback', feedbackRouter);
app.use('/feedback_agree', feedbackRouter);
app.use('/plus_sug', plus_sugRouter);
app.use('/noAnswer', noAnswerRouter);
// app.use('/monthly', monthlyRouter);

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