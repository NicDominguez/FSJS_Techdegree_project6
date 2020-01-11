const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});


/* const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

// Set Middleware
app.use(bodyParser.urlencoded({ extended: false }));
 */
app.use('/static', express.static('public'))


// Import routes
const mainRoutes = require('./routes/main');
const projectRoutes = require('./routes/projects')

app.use(mainRoutes);
app.use('/project', projectRoutes)