const express = require('express');
const app = express();

app.set('view engine', 'pug');

 // Set static files
 app.use('/static', express.static('public'))


 // Import routes
 const mainRoutes = require('./routes/main');
 const projectRoutes = require('./routes/projects')
 
 app.use(mainRoutes);
 app.use('/project', projectRoutes)

/* const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

// Set Middleware
app.use(bodyParser.urlencoded({ extended: false }));
 */

 // Create error object from error constructor
 app.use((req, res, next) => {
    const err = new Error("I'm sorry, there must have been an error")
    err.status = 500;
    next(err)
 });


app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status)
    res.render('error')
 });

 app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});