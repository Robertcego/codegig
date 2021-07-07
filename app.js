const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Database
const db = require('./config/database');
// Test Database connection
db.authenticate()
  .then(() => {
    console.log('Connection to DB successful');
  })
  .catch((err) => {
    console.log('Connection to DB failed');
    console.log(err);
  });

const app = express();
const PORT = process.env.PORT || 5000;

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', (req, res) => {
  res.render('index', { layout: 'landing' });
});

app.use('/gigs', require('./routes/gigs'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
