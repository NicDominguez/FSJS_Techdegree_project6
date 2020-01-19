const express = require('express');
const router = express.Router();
const { projects } = require('../data.json')


// Dynamically renders project pug file depending on project route destination
router.get('/:id', (req, res) => {
    if (projects[req.params.id]) {        
            res.render('project', {
                projects, req
        });
    } else {
        console.log("Project does not exist")
        res.redirect('/')
    }
});

module.exports = router;