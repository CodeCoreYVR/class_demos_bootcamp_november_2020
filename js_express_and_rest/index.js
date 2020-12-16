const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

// STATIC ASSETS
// Use `path.join` to combine string arguments into a path
// path.join('/', 'users', 'bob'); // "/users/bob"

// __dirname is a global variable provided by node that has the value of the path to your root directory

app.use(express.static(path.join(__dirname, 'public')));
// static asset middleware will take all the files and directories within /public
// and serve them publically with their own url

// app is an object that has methods you use to build a web server
const logger = require('morgan');

app.set('view engine', 'ejs'); // setting configuration for express letting it know to use EJS as our templating engine

// express.urlencoded is middleware for parsing x-www-urlencoded info from POST requests
// adding the extended true option allows the data to take the shape of arrays and objects
// puts all the info on req.body
app.use(express.urlencoded({ extended: true }));

// Method Override
// looks for a hidden input called _method
// will change the HTTP VERB to the value of that input
app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    const method = req.body._method;
    return method;
  }
}))

app.use(cookieParser()); // will parse cookies and put them on request.cookies

// app.use is a method used to mount middleware
app.use(logger('dev')); // add logging middleware


// CUSTOM MIDDLEWARE
app.use((req, res, next) => {
  console.log('🍪:', req.cookies);
  const username = req.cookies.username;

  res.locals.username = "";
  // properties set on res.locals become accessible in any view
  if (username) {
    res.locals.username = username
    console.log(`Signed in as ${username}`);
  }
  // next is a function, when invoked it will tell express to move on to the next middleware
  next();
})

app.use(noMonkey);

function noMonkey(req, res, next) {
  console.log(req.body);
  // req.body can look something like:
  // { username: 'monkey', a: 'apples', b: 'bananas' }
  const body = req.body;

  let monkeyFound = false;
  for (let key in body) {
    if(`${body[key]}`.toLowerCase() === 'monkey') {
      monkeyFound = true;
    }
  }
  if (monkeyFound) {
    res.send('No monkeys allowed');
  } else {
    next();
  }

}

// app.get arguments:
// 1) path
// 2) callback with the arguments: 1) request 2) response

// Your Server consists of ADDRESS and PORT
// localhost:3000 location of your server

// On your server you can provide different resources

// PATHs - the strings added at the end of the port

// localhost:3000/hello_world -> client is asking for whatever resource you give them on /hello_world

// app.get
// Listens for GET '/hello_world'
app.get('/hello_world', (request, response) => {
  // request object that represents the incoming HTTP request
  // response objec that has methods used to create a HTTP response
  response.send('<h5>Hello Brandon</h5>');
})

// Create a route to handle requests at GET "/welcome"

app.get('/welcome', (request, response) => {
  // response.send('Hello');
  // .render() use to render out a template a template at "/views/<template_name>"
  const ONE_DAY = 1000 * 60 * 60 * 24;
  response.cookie('hello', 'world', { maxAge: ONE_DAY })
  response.render('welcome'); // express will look for a view/template at /views/welcome
})

// GET /contact_us
app.get('/contact_us', (request, response) => {
  response.render('contact');
})

app.get('/thank_you', (request, response) => {
  // request.query contains info from query params from the url
  // {
  //   fullname: 'brandon',
  //   email: 'codecore@gmail.com',
  //   message: 'hello world'
  // }
  const fullname = request.query.fullname;
  const email = request.query.email;
  const message = request.query.message;
  // passing a second object as an argument to render allows you to use variables within the template
  // every key will become a variable that can be used
  response.render('thank_you', {
    fullname: fullname,
    email: email,
    message: message
  })
})

app.get('/survey', (req, res) => {
  console.log('🍪 Cookies:', req.cookies);

  const { name, colour, day } = req.query
  // const name = req.query.name;
  res.render('survey', {
    u: name,
    a: colour,
    b: day
  });
});

app.post('/sign_in', (req, res) => {
  // req.body holds all the info from the post request
  const COOKIE_EXPIRE = 1000 * 60 * 60 * 24 * 7;
  const username = req.body.username;
  res.cookie('username', username, { maxAge: COOKIE_EXPIRE });
  res.redirect('/welcome');
});

app.post('/sign_out', (req, res) => {
  res.clearCookie('username');
  res.redirect('/welcome');
});

// ------------
// POST ROUTES
// ------------
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

const ADDRESS = 'localhost'; // the loopback address this is your home for your machine. The IP is 127.0.0.1
const PORT = 3000;
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on ${ADDRESS}:${PORT}`);
});