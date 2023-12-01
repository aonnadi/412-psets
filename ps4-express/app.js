// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ps4Router = require('./routes/ps4');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // or 'pug' if you prefer Pug as the template engine

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/ps4', ps4Router); // Mount the ps4Router on '/ps4' path
// app.use('/ps4', ps4Router()); - this doesnt work

// need this for it to work on /
app.get('/', (req, res) => {
    res.render('pugfile'); // Render your Pug template here
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
