// server.js
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3001;

// middleware
app.use(morgan('dev'));



// add the following:
const inventory = [
  { name: 'Candle', qty: 4 },
  { name: 'Cheese', qty: 10 },
  { name: 'Phone', qty: 1 },
  { name: 'Tent', qty: 0 },
  { name: 'Torch', qty: 5 }
]

app.get('/', (req, res) => {
  res.render('home.ejs', { 
    msg: 'Here is your inventory',
    player: {
      name: "friend"
    },
    // change the following line to: 
    inventory,

  });
});

app.get('/:itemId', (req,res) => {
  const index = req.params.itemId;
  const item = inventory[index];
  res.render('show.ejs',{item});
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});


// Start Server
app.listen(port, () => {
  console.log("Apps started at: " + port)
})