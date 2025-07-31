const express = require('express');
const app = express();
const morgan = require('morgan');

// Middleware
app.use(morgan('dev')); 

// app.get('/home', (req,res) => {
//   res.send("<h1 style = color:blue > Hello Express </h1>")
// });

// app.use((req,res, next) => {
//   console.log("Middleware 2: Perfoming some opreation!");
//   next();
// });

// app.get('/about',(req,res) => {
//   res.send("about");
// });


// app.get('/greet/:name', (req,res) => {
//   const name = req.params.name;

//   console.log(name);

//   res.send(`Hello, [${name}]`);
// });


// // https://www.google.com/search?q=kitty

// app.get('/search', (req,res) => {
//   const name = req.query.name;
//   const age  = req.query.age;

//   res.send(`${name},${age}`);
// });


// //will stop here because itemNumber using : parameter sign
// app.get("/:itemNumber" , (req,res) => {
//   const itemNumber = req.params.itemNumber;

//   console.log(itemNumber);

//   res.send(itemNumber);
// });


// First middleware function
app.use((req, res, next) => {
  console.log('Middleware 1: Logging request details');
  next(); // Pass control to the next middleware
});

// Second middleware function
app.use((req, res, next) => {
  console.log('Middleware 2: Performing some operation');
  next(); // Pass control to the next middleware
});

// Route handler as the final middleware
app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
});

