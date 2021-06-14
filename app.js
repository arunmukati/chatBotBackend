var createError = require('http-errors');
var express = require('express');
var path = require('path');
const { apiRoutes, apiAuthRoutes, routes } = require('./src/routes');
const apiError = require('./src/utilities/apiError');
const { apiMiddleware } = require('./src/middleware');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


var indexRouter = require('./src/routes/index');
// var usersRouter = require('./src/routes/users');

var app = express();
var cors = require('cors');
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/../client/build')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/api',apiRoutes);
app.use('/auth', apiAuthRoutes);
app.use('/images', express.static(__dirname + '/src/images'));
app.get('/chatBotScript.js', function (request, response) {
  response.sendFile('./src/utilities/chatBotScript.js', { root: __dirname });
});
app.use('/',express.static(__dirname + '/public/chatbot'))
// app.use('/', (req,res,next)=>{
//   res.send("Hello")
// });


// app.use('/',routes);
// app.get('*.*', express.static(path.join(__dirname, '/../client/build/bundle.js')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '/../client/build/index.html'))
// })



// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err);
  let error = apiError(err);
  res.status(error.status || 500);
  res.send(error);
});
// const models = path.join(__dirname, './src/models');
// fs.readdirSync(models)
//   .filter(file => ~file.search(/^[^.].*\.js$/))
//   .forEach(file => require(path.join(models, file)));








// const { NlpManager } = require('node-nlp');

// const manager = new NlpManager({ languages: ['en'], forceNER: true });
// manager.load('hello');
// Adds the utterances and intents for the NLP
// manager.addDocument('en', 'goodbye for now', 'greetings.bye');
// manager.addDocument('en', 'bye bye take care', 'greetings.bye');
// manager.addDocument('en', 'okay see you later', 'greetings.bye');
// manager.addDocument('en', 'bye for now', 'greetings.bye');
// manager.addDocument('en', 'i must go', 'greetings.bye');
// manager.addDocument('en', 'hello', 'greetings.hello');
// manager.addDocument('en', 'hi', 'greetings.hello');
// manager.addDocument('en', 'howdy', 'greetings.hello');

// Train also the NLG
// manager.addAnswer('en', 'greetings.bye', 'Till next lol3 time');
// manager.addAnswer('en', 'greetings.bye', 'see you soon!');
// manager.addAnswer('en', 'greetings.hello', 'Hey there!');
// manager.addAnswer('en', 'greetings.hello', 'Greetings!');

// Train and save the model.
// (async() => {
//     await manager.train();
//     manager.save('hello');
//     const response = await manager.process('en', 'I should go now');
//     console.log(response);
//     console.log("new");
//     console.log(await manager.process('en',"bye for now"));
// })();











module.exports = app;
