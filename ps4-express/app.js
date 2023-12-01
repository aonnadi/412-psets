// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ps4Router = require('./routes/ps4');

app.set('view engine', 'ejs'); // or 'pug' if you prefer Pug as the template engine

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/ps4', ps4Router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
