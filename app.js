const express = require('express');
const app = express();

app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('The application is running on localhose:3000');
});


/* const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

// Set Middleware
app.use(bodyParser.urlencoded({ extended: false }));


// Import routes
const routes = require('./routes.js');
app.use(routes); */