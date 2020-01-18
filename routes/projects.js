const express = require('express');
const router = express.Router();
const { projects } = require('../data.json')


// Dynamically renders project pug file depending on project route destination
router.get('/:id', (req, res) => {
    res.render('project', {
        projects, req 
    });

});


module.exports = router;