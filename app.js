const express = require('express');
const app = express();

// Sets view engine to PUG
app.set('view engine', 'pug');

 // Set static files folder to public
 app.use('/static', express.static('public'))


 // Import and use routes from routes files
 const mainRoutes = require('./routes/main');
 const projectRoutes = require('./routes/projects')
 
 app.use(mainRoutes);
 app.use('/project', projectRoutes)

 // Create error object from error constructor
 app.use((req, res, next) => {
    const err = new Error("I'm sorry, this page does not exist");
    console.log("The page you are looking for cannot be found.");
    err.status = 404;
    next(err);
 });

 // Uses error when no route exists
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
 });

 // Sets port to 3000
 app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});