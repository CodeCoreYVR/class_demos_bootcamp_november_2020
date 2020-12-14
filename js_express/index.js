const express = require('express');
const app = express();
// app is an object that has methods you use to build a web server
const logger = require('morgan');

app.set('view engine', 'ejs'); // setting configuration for express letting it know to use EJS as our templating engine


// app.use is a method used to mount middleware
app.use(logger('dev')); // add logging middleware


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
  const { name, colour, day } = req.query
  // const name = req.query.name;
  res.render('survey', {
    username: name,
    a: colour,
    b: day
  });
});

const ADDRESS = 'localhost'; // the loopback address this is your home for your machine. The IP is 127.0.0.1
const PORT = 3000;
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on ${ADDRESS}:${PORT}`);
});